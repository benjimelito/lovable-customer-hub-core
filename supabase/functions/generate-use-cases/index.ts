import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface RequestBody {
  companyName: string;
  industry: string;
  roles: string[];
  techStack?: string[];
  painPoints?: string[];
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body: RequestBody = await req.json();
    const { companyName, industry, roles, techStack, painPoints } = body;

    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) {
      console.error("LOVABLE_API_KEY not configured");
      return new Response(
        JSON.stringify({ error: "AI service not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const systemPrompt = `You are an AI assistant that generates relevant use case suggestions for enterprise software demos. 
Generate practical, industry-specific use cases that can be built as internal tools or applications.

Return a JSON array of 6 use case suggestions with this exact structure:
{
  "suggestions": [
    {
      "id": "unique-id",
      "title": "Short descriptive title",
      "description": "2-3 sentence description of what the tool does and its value",
      "industry": "${industry}",
      "role": "Target role (e.g., Engineering, Sales, Marketing, Operations)",
      "complexity": "simple" | "medium" | "complex",
      "estimatedDemoTime": "X min",
      "tags": ["tag1", "tag2", "tag3"]
    }
  ]
}

Guidelines:
- Make suggestions specific to the ${industry} industry
- Consider the roles: ${roles.join(", ")}
- Include a mix of complexity levels
- Focus on internal tools, dashboards, and productivity applications
- Make descriptions actionable and outcome-focused
- Estimated demo times: simple=5-10min, medium=12-18min, complex=20-30min`;

    const userPrompt = `Generate 6 demo use case suggestions for ${companyName} in the ${industry} industry.
${techStack?.length ? `Their tech stack includes: ${techStack.join(", ")}` : ""}
${painPoints?.length ? `Known pain points: ${painPoints.join(", ")}` : ""}

Focus on practical internal tools their team could build to improve productivity.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error("No content in AI response");
    }

    // Parse JSON from response (handle markdown code blocks)
    let parsed;
    try {
      const jsonMatch = content.match(/```json\s*([\s\S]*?)\s*```/) || content.match(/```\s*([\s\S]*?)\s*```/);
      const jsonStr = jsonMatch ? jsonMatch[1] : content;
      parsed = JSON.parse(jsonStr.trim());
    } catch (e) {
      console.error("Failed to parse AI response:", content);
      throw new Error("Failed to parse AI response");
    }

    return new Response(
      JSON.stringify({
        suggestions: parsed.suggestions || parsed,
        generatedAt: new Date().toISOString(),
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error generating use cases:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to generate suggestions";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
