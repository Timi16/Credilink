import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import LandingPage from "./pages/LandingPage";
import VerifyPage from "./pages/VerifyPage";
import DashboardLayout from "./components/DashboardLayout";
import DashboardMain from "./pages/DashboardMain";
import AttestationDetail from "./pages/AttestationDetail";
import ActivityPage from "./pages/ActivityPage";
import SharePage from "./pages/SharePage";
import LendersPage from "./pages/LendersPage";
import LenderDashboardLayout from "./components/LenderDashboardLayout";
import LenderWalletLookup from "./pages/LenderWalletLookup";
import APIKeysPage from "./pages/APIKeysPage";
import AdminLayout from "./components/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";
import RevokePage from "./pages/RevokePage";
import AuditLogPage from "./pages/AuditLogPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/verify" element={<VerifyPage />} />
          <Route path="/lenders" element={<LendersPage />} />

          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardMain />} />
            <Route path="attestation" element={<AttestationDetail />} />
            <Route path="activity" element={<ActivityPage />} />
            <Route path="share" element={<SharePage />} />
            <Route path="wallet" element={<DashboardMain />} />
            <Route path="privacy" element={<DashboardMain />} />
            <Route path="api" element={<SharePage />} />
          </Route>

          <Route path="/lenders/dashboard" element={<LenderDashboardLayout />}>
            <Route index element={<LenderWalletLookup />} />
            <Route path="history" element={<LenderWalletLookup />} />
            <Route path="analytics" element={<LenderWalletLookup />} />
          </Route>
          <Route path="/lenders/api-keys" element={<LenderDashboardLayout />}>
            <Route index element={<APIKeysPage />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="revoke" element={<RevokePage />} />
            <Route path="audit" element={<AuditLogPage />} />
            <Route path="*" element={<AdminDashboard />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
