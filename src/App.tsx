import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Assessment from "@/pages/Assessment";
import SmartScheduling from "@/pages/SmartScheduling";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/smart-scheduling" element={<SmartScheduling />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;