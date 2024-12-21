import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AssessmentForm from "@/components/AssessmentForm";
import { toast } from "sonner";

const Assessment = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto space-y-8"
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Burnout Risk Assessment</h1>
          <p className="text-muted-foreground text-lg">
            Complete this 60-second assessment to get your personalized burnout prevention plan.
          </p>
        </div>

        <Card className="p-6">
          <AssessmentForm />
        </Card>
      </motion.div>
    </div>
  );
};

export default Assessment;