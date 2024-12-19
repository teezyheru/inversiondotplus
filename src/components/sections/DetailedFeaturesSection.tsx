import { Check } from "lucide-react";
import { motion } from "framer-motion";

const DetailedFeaturesSection = () => {
  return (
    <section className="container py-24">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-16"
      >
        Built for Shift Workers
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-semibold">For Workers</h3>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <Check className="h-6 w-6 text-health-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium mb-1">Personalized Support</p>
                <p className="text-muted-foreground leading-relaxed">
                  Get tailored advice based on your specific work patterns and stress triggers
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Check className="h-6 w-6 text-health-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium mb-1">Schedule Optimization</p>
                <p className="text-muted-foreground leading-relaxed">
                  Balance work demands with personal life through smart shift planning
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Check className="h-6 w-6 text-health-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium mb-1">Early Warning System</p>
                <p className="text-muted-foreground leading-relaxed">
                  Receive alerts before burnout becomes critical with AI-powered monitoring
                </p>
              </div>
            </li>
          </ul>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-semibold">For Employers</h3>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <Check className="h-6 w-6 text-health-secondary flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium mb-1">Reduce Turnover Costs</p>
                <p className="text-muted-foreground leading-relaxed">
                  Cut rehiring and training expenses by preventing burnout-related departures
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Check className="h-6 w-6 text-health-secondary flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium mb-1">Team Health Dashboard</p>
                <p className="text-muted-foreground leading-relaxed">
                  Monitor team well-being and identify stress patterns early with real-time analytics
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Check className="h-6 w-6 text-health-secondary flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium mb-1">ROI Tracking</p>
                <p className="text-muted-foreground leading-relaxed">
                  Measure the impact on retention, productivity, and bottom line with detailed metrics
                </p>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default DetailedFeaturesSection;