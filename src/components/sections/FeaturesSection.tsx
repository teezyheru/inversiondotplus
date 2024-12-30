import { Mic, Brain, BarChart3, Users } from "lucide-react";
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
          Key Features
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-background/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-muted"
          >
            <div className="h-14 w-14 bg-health-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <Mic className="h-7 w-7 text-health-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Audio-Driven Insights</h3>
            <p className="text-muted-foreground leading-relaxed">
              Turn speech into structured data with AI-powered speech recognition, emotion detection, and context analysis.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-background/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-muted"
          >
            <div className="h-14 w-14 bg-health-secondary/10 rounded-2xl flex items-center justify-center mb-6">
              <Brain className="h-7 w-7 text-health-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Emotion Detection</h3>
            <p className="text-muted-foreground leading-relaxed">
              Identify stress, anxiety, and emotional shifts to provide a clear picture of mental health.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-background/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-muted"
          >
            <div className="h-14 w-14 bg-health-accent/10 rounded-2xl flex items-center justify-center mb-6">
              <BarChart3 className="h-7 w-7 text-health-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Structured Reporting</h3>
            <p className="text-muted-foreground leading-relaxed">
              Transform conversation data into actionable insights with intuitive visualizations for clinicians.
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
            <h3 className="text-xl font-semibold mb-3">Conversational Assessment</h3>
            <p className="text-muted-foreground leading-relaxed">
              A natural phone call experience gathers meaningful data while putting users at ease, identifying stress triggers and emotional cues.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;