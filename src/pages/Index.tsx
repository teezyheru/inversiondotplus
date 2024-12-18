import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container py-20 md:py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Your Complete Health & Wellness Platform
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive health tracking, burnout prevention, and veterans benefits management in one seamless experience.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Button size="lg" className="gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/50 py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
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

            {/* Veterans Benefits */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-background p-6 rounded-lg shadow-sm"
            >
              <div className="h-12 w-12 bg-health-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-health-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Veterans Benefits</h3>
              <p className="text-muted-foreground">
                Streamlined benefits management and claims tracking designed for veterans.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20">
        <div className="bg-muted rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Take Control?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who have transformed their health and wellness journey with our platform.
          </p>
          <Button size="lg" className="gap-2">
            Start Your Journey <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;