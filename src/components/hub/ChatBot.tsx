import React, { useState, useRef, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, MessageCircle, Maximize2, Minimize2, X } from "lucide-react";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import SuggestedQuestions from "./SuggestedQuestions";
import { useCustomer } from "@/contexts/CustomerContext";
import { toast } from "sonner";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/faq-chat`;

const initialSuggestions = [
  "What's included in the Enterprise plan?",
  "How does Lovable handle security?",
  "Can non-technical users build apps?",
  "What support options are available?",
];

const ChatBot: React.FC = () => {
  const { profile, dealStage } = useCustomer();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: `Hi! I'm here to help answer any questions about Lovable. I have access to all our documentation and can help you understand how Lovable can benefit ${profile.companyName}. What would you like to know?`,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [suggestions, setSuggestions] = useState(initialSuggestions);
  const [isExpanded, setIsExpanded] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading, isThinking, isStreaming]);

  // Lock body scroll when expanded
  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isExpanded]);

  const streamChat = useCallback(
    async (userMessage: string) => {
      const userMsg: Message = {
        id: `user-${Date.now()}`,
        role: "user",
        content: userMessage,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setIsLoading(true);
      setIsThinking(true);
      setIsStreaming(false);
      setSuggestions([]);

      let assistantContent = "";
      const assistantId = `assistant-${Date.now()}`;

      try {
        const resp = await fetch(CHAT_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({
            messages: [...messages.filter((m) => m.id !== "welcome"), userMsg].map((m) => ({
              role: m.role,
              content: m.content,
            })),
            context: {
              companyName: profile.companyName,
              industry: profile.industry,
              dealStage,
            },
          }),
        });

        if (!resp.ok) {
          const errorData = await resp.json().catch(() => ({}));
          throw new Error(errorData.error || `Request failed with status ${resp.status}`);
        }

        if (!resp.body) throw new Error("No response body");

        const reader = resp.body.getReader();
        const decoder = new TextDecoder();
        let textBuffer = "";

        const upsertAssistant = (content: string) => {
          // First token received - switch from thinking to streaming
          if (isThinking) {
            setIsThinking(false);
            setIsStreaming(true);
          }
          
          assistantContent = content;
          setMessages((prev) => {
            const last = prev[prev.length - 1];
            if (last?.id === assistantId) {
              return prev.map((m) => (m.id === assistantId ? { ...m, content } : m));
            }
            return [
              ...prev,
              { id: assistantId, role: "assistant", content, timestamp: new Date() },
            ];
          });
        };

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          textBuffer += decoder.decode(value, { stream: true });

          let newlineIndex: number;
          while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
            let line = textBuffer.slice(0, newlineIndex);
            textBuffer = textBuffer.slice(newlineIndex + 1);

            if (line.endsWith("\r")) line = line.slice(0, -1);
            if (line.startsWith(":") || line.trim() === "") continue;
            if (!line.startsWith("data: ")) continue;

            const jsonStr = line.slice(6).trim();
            if (jsonStr === "[DONE]") break;

            try {
              const parsed = JSON.parse(jsonStr);
              const delta = parsed.choices?.[0]?.delta?.content;
              if (delta) {
                assistantContent += delta;
                upsertAssistant(assistantContent);
              }
            } catch {
              textBuffer = line + "\n" + textBuffer;
              break;
            }
          }
        }

        // Set follow-up suggestions based on conversation
        setSuggestions([
          "Tell me more about pricing",
          "How does GitHub integration work?",
          "What about data security?",
        ]);
      } catch (error) {
        console.error("Chat error:", error);
        toast.error(error instanceof Error ? error.message : "Failed to send message");
        setMessages((prev) => [
          ...prev,
          {
            id: `error-${Date.now()}`,
            role: "assistant",
            content:
              "I'm sorry, I encountered an error. Please try again or contact your Account Executive for immediate assistance.",
            timestamp: new Date(),
          },
        ]);
        setSuggestions(initialSuggestions);
      } finally {
        setIsLoading(false);
        setIsThinking(false);
        setIsStreaming(false);
      }
    },
    [messages, profile, dealStage, isThinking]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    const message = input.trim();
    setInput("");
    streamChat(message);
  };

  const handleSuggestionSelect = (question: string) => {
    if (isLoading) return;
    streamChat(question);
  };

  const chatContent = (
    <>
      {/* Header */}
      <div className="px-4 py-3 border-b border-border bg-[#F7F4ED] dark:bg-muted flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <MessageCircle className="w-4 h-4 text-primary" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-foreground">Lovable AI Assistant</h3>
            <p className="text-xs text-muted-foreground">Powered by Lovable docs</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsExpanded(!isExpanded)}
          className="h-8 w-8"
        >
          {isExpanded ? (
            <Minimize2 className="h-4 w-4" />
          ) : (
            <Maximize2 className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4" ref={scrollRef}>
        <div className="space-y-4">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          {isThinking && <TypingIndicator phase="thinking" />}
        </div>
      </ScrollArea>

      {/* Suggestions */}
      {suggestions.length > 0 && !isLoading && (
        <div className="px-4 py-2 border-t border-border/50">
          <SuggestedQuestions
            questions={suggestions}
            onSelect={handleSuggestionSelect}
            disabled={isLoading}
          />
        </div>
      )}

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-border bg-[#FCFBF8] dark:bg-card">
        <div className="flex gap-2">
          <Input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything about Lovable..."
            disabled={isLoading}
            className="flex-1 bg-background border-[#D8D6CF] dark:border-border"
          />
          <Button type="submit" disabled={!input.trim() || isLoading} size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </>
  );

  // Fullscreen modal rendered via portal
  const fullscreenModal = isExpanded
    ? ReactDOM.createPortal(
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full h-full max-w-4xl max-h-[90vh] bg-card border border-border rounded-3xl overflow-hidden flex flex-col shadow-2xl"
            >
              {chatContent}
            </motion.div>
          </motion.div>
        </AnimatePresence>,
        document.body
      )
    : null;

  return (
    <>
      {/* Normal inline view */}
      <div className={`flex flex-col h-[500px] bg-card border border-border rounded-3xl overflow-hidden ${isExpanded ? "invisible" : ""}`}>
        {chatContent}
      </div>

      {/* Fullscreen overlay via portal */}
      {fullscreenModal}
    </>
  );
};

export default ChatBot;
