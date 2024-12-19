import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="container py-24 md:py-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-8 max-w-4xl mx-auto"
      >
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          <span className="bg-gradient-to-r from-health-primary via-health-secondary to-health-accent bg-clip-text text-transparent">
            Inversion
          </span>
          <span className="text-health-primary">+</span>
        </motion.h1>
        <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-health-primary via-health-secondary to-health-accent bg-clip-text text-transparent">
          Precision Burnout Prevention for Shift Workers
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          AI-powered insights to keep your team healthy, productive, and stable. Start with our 60-second assessment.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Button size="lg" className="bg-health-primary hover:bg-health-primary/90 gap-2">
            Start Free Assessment <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-health-primary text-health-primary hover:bg-health-primary/10">
            View Demo
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;