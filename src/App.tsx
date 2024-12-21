import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Index from "@/pages/Index";
import Assessment from "@/pages/Assessment";
import SmartScheduling from "@/pages/SmartScheduling";
import Login from "@/pages/Login";
import { Toaster } from "@/components/ui/toaster";
import { supabase } from "@/integrations/supabase/client";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    // Check initial auth state
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAuthenticated(!!session);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsAuthenticated(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Show loading state while checking auth
  if (isAuthenticated === null) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
    </div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/assessment" />} />
        <Route 
          path="/assessment" 
          element={isAuthenticated ? <Assessment /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/smart-scheduling" 
          element={isAuthenticated ? <SmartScheduling /> : <Navigate to="/login" />} 
        />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;