import { Activity, Clock, Brain, Users } from "lucide-react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  return (
    <section className="bg-muted/50 py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Why Inversion+</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-background p-6 rounded-lg shadow-sm"
          >
            <div className="h-12 w-12 bg-health-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Brain className="h-6 w-6 text-health-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">60-Second Assessment</h3>
            <p className="text-muted-foreground">
              Quick, targeted questions identify your biggest stress triggers and create a personalized prevention plan.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-background p-6 rounded-lg shadow-sm"
          >
            <div className="h-12 w-12 bg-health-secondary/10 rounded-lg flex items-center justify-center mb-4">
              <Activity className="h-6 w-6 text-health-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI-Powered Alerts</h3>
            <p className="text-muted-foreground">
              Preemptive warnings when burnout risks spike, with actionable steps for both workers and managers.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-background p-6 rounded-lg shadow-sm"
          >
            <div className="h-12 w-12 bg-health-accent/10 rounded-lg flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-health-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Smart Scheduling</h3>
            <p className="text-muted-foreground">
              Optimize shift patterns to reduce fatigue and improve work-life balance.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-background p-6 rounded-lg shadow-sm"
          >
            <div className="h-12 w-12 bg-health-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-health-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Team Insights</h3>
            <p className="text-muted-foreground">
              Help managers identify team stress patterns and implement targeted solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;