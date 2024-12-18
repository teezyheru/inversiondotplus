import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FileCheck2, Clock, Brain, Shield } from "lucide-react";

const VeteransBenefitsSection = () => {
  return (
    <section className="bg-muted/50 py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            Revolutionizing Veterans Benefits Processing
          </motion.h2>
          <p className="text-xl text-muted-foreground mb-4">
            Streamlining the claims process with AI-powered automation, helping veterans receive their benefits faster and more efficiently.
          </p>
          <div className="bg-background p-4 rounded-lg mb-6">
            <p className="text-health-primary font-semibold">In 2023, the VA processed over 2.2M claims, providing $136B in benefits</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-4"
            >
              <div className="h-12 w-12 bg-health-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileCheck2 className="h-6 w-6 text-health-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Automated Claims Processing</h3>
                <p className="text-muted-foreground">
                  AI-powered system streamlines claim reviews and evidence gathering, reducing manual workload for VSRs.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-4"
            >
              <div className="h-12 w-12 bg-health-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6 text-health-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Faster Processing Times</h3>
                <p className="text-muted-foreground">
                  Smart prioritization and automated workflows reduce claim processing times by up to 60%.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-4"
            >
              <div className="h-12 w-12 bg-health-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Brain className="h-6 w-6 text-health-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Intelligent Decision Support</h3>
                <p className="text-muted-foreground">
                  ML algorithms analyze historical data to provide accurate recommendations for claim decisions.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-background p-8 rounded-lg shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-8 w-8 text-health-primary" />
              <h3 className="text-2xl font-bold">Impact Statistics</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-2xl font-bold text-health-primary">1M+</p>
                <p className="text-sm text-muted-foreground">New claims added in 2024 through PACT Act</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-2xl font-bold text-health-secondary">60%</p>
                <p className="text-sm text-muted-foreground">Reduction in processing time</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-2xl font-bold text-health-accent">90%</p>
                <p className="text-sm text-muted-foreground">Accuracy in automated claim reviews</p>
              </div>
            </div>
            <Button className="w-full mt-6">Learn More About VA Claims</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VeteransBenefitsSection;