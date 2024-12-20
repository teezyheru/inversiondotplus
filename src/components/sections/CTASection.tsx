import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const CTASection = () => {
  const navigate = useNavigate();

  const handleStartAssessment = () => {
    // For now, we'll show a toast since the assessment page isn't built yet
    toast.info("Assessment feature coming soon!");
    // TODO: Uncomment when assessment route is ready
    // navigate("/assessment");
  };

  const handleScheduleDemo = () => {
    toast.info("Demo scheduling feature coming soon!");
    // TODO: Implement demo scheduling functionality
  };

  return (
    <section className="container py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-health-primary/10 via-health-secondary/10 to-health-accent/10 rounded-3xl p-12 text-center backdrop-blur-sm"
      >
        <h2 className="text-3xl font-bold mb-4">Stop Losing Your Best People</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Cut turnover costs by 50% with our precision burnout prevention platform. Start with a free assessment today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-health-primary hover:bg-health-primary/90 gap-2"
            onClick={handleStartAssessment}
          >
            Start Free Assessment <ArrowRight className="h-4 w-4" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-health-primary text-health-primary hover:bg-health-primary/10"
            onClick={handleScheduleDemo}
          >
            Schedule Demo
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;