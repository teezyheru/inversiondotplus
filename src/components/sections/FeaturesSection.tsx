import { Activity, Clock, Brain, Users } from "lucide-react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-16"
        >
          Why Inversion+
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-background/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-muted"
          >
            <div className="h-14 w-14 bg-health-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <Brain className="h-7 w-7 text-health-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">60-Second Assessment</h3>
            <p className="text-muted-foreground leading-relaxed">
              Quick, targeted questions identify your biggest stress triggers and create a personalized prevention plan.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-background/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-muted"
          >
            <div className="h-14 w-14 bg-health-secondary/10 rounded-2xl flex items-center justify-center mb-6">
              <Activity className="h-7 w-7 text-health-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI-Powered Alerts</h3>
            <p className="text-muted-foreground leading-relaxed">
              Preemptive warnings when burnout risks spike, with actionable steps for both workers and managers.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-background/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-muted"
          >
            <div className="h-14 w-14 bg-health-accent/10 rounded-2xl flex items-center justify-center mb-6">
              <Clock className="h-7 w-7 text-health-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Smart Scheduling</h3>
            <p className="text-muted-foreground leading-relaxed">
              Optimize shift patterns to reduce fatigue and improve work-life balance with AI-driven recommendations.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-background/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-muted"
          >
            <div className="h-14 w-14 bg-health-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <Users className="h-7 w-7 text-health-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Team Insights</h3>
            <p className="text-muted-foreground leading-relaxed">
              Help managers identify team stress patterns and implement targeted solutions with real-time analytics.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;