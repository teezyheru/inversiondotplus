import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="container py-20 md:py-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Precision Burnout Prevention for Shift Workers
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Stop burnout before it starts. AI-powered insights to keep your team healthy, productive, and stable.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Button size="lg" className="gap-2">
            Start Free Trial <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            For Employers
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;