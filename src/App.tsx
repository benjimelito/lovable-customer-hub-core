import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { CustomerProvider, RewardsProvider, ProgressProvider } from "./contexts";
import CustomerHubHome from "./pages/CustomerHubHome";
import UsageDashboard from "./pages/UsageDashboard";
import SalesProcess from "./pages/SalesProcess";
import ResearchInsights from "./pages/ResearchInsights";
import SocialProof from "./pages/SocialProof";
import ActionItems from "./pages/ActionItems";
import FAQPage from "./pages/FAQPage";
import SwagRedemption from "./pages/SwagRedemption";
import DemoPage from "./pages/DemoPage";
import DemoIdeas from "./pages/DemoIdeas";
import Instructions from "./pages/Instructions";
import Home from "./pages/Home";
import ComponentShowcase from "./pages/ComponentShowcase";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CustomerProvider>
      <RewardsProvider>
        <ProgressProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                {/* Customer Hub Routes */}
                <Route path="/" element={<CustomerHubHome />} />
                <Route path="/demo" element={<DemoPage />} />
                <Route path="/usage" element={<UsageDashboard />} />
                <Route path="/process" element={<SalesProcess />} />
                <Route path="/research" element={<ResearchInsights />} />
                <Route path="/social" element={<SocialProof />} />
                <Route path="/actions" element={<ActionItems />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/swag" element={<SwagRedemption />} />
                <Route path="/demo-ideas" element={<DemoIdeas />} />
                <Route path="/instructions" element={<Instructions />} />
                
                {/* Utility Routes */}
                <Route path="/original" element={<Home />} />
                <Route path="/components" element={<ComponentShowcase />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </ProgressProvider>
      </RewardsProvider>
    </CustomerProvider>
  </QueryClientProvider>
);

export default App;
