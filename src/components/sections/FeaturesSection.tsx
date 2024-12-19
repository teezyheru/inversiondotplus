import { Activity, Clock } from "lucide-react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  return (
    <section className="bg-muted/50 py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Health Tracking */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-background p-6 rounded-lg shadow-sm"
          >
            <div className="h-12 w-12 bg-health-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Activity className="h-6 w-6 text-health-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Health Tracking</h3>
            <p className="text-muted-foreground">
              Monitor your activity, sleep, and vital signs with precision. Get insights that matter.
            </p>
          </motion.div>

          {/* Burnout Prevention */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-background p-6 rounded-lg shadow-sm"
          >
            <div className="h-12 w-12 bg-health-secondary/10 rounded-lg flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-health-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Burnout Prevention</h3>
            <p className="text-muted-foreground">
              Smart shift management and stress monitoring to keep you performing at your best.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;