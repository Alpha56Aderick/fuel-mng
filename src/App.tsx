import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PumpManagement from "./pages/PumpManagement";
import CreatePump from "./pages/CreatePump";
import TransactionManagement from "./pages/TransactionManagement";
import InventoryMonitoring from "./pages/InventoryMonitoring";  // New import
import NotFound from "./pages/NotFound";
import NavigationBar from "@/components/ui/NavigationBar"; // Already imported

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <NavigationBar /> {/* Add NavigationBar here */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pump-management" element={<PumpManagement />} />
          <Route path="/pump-management/create" element={<CreatePump />} />
          <Route path="/transactions" element={<TransactionManagement />} />
          <Route path="/inventory" element={<InventoryMonitoring />} />  {/* New route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;