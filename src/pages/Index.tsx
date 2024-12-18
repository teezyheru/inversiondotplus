import HeroSection from "@/components/sections/HeroSection";
import VeteransBenefitsSection from "@/components/sections/VeteransBenefitsSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Shield, Clock, Check } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
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

      <VeteransBenefitsSection />

      {/* Detailed Features Section */}
      <section className="container py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Solution</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Health Tracking Features</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-health-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Advanced Activity Monitoring</p>
                  <p className="text-muted-foreground">Track steps, workouts, and daily movement patterns</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-health-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Sleep Analysis</p>
                  <p className="text-muted-foreground">Monitor sleep quality, patterns, and recovery</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-health-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Stress Management</p>
                  <p className="text-muted-foreground">Track stress levels and get personalized recommendations</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Burnout Prevention System</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-health-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Smart Shift Planning</p>
                  <p className="text-muted-foreground">AI-powered schedule optimization to prevent burnout</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-health-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Early Warning System</p>
                  <p className="text-muted-foreground">Detect burnout risks before they become critical</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-health-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Recovery Tracking</p>
                  <p className="text-muted-foreground">Monitor rest periods and optimize recovery time</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-muted/50 py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-background p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-2">Basic</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">$9</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-health-primary" />
                  <span>Basic health tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-health-primary" />
                  <span>Simple burnout alerts</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-health-primary" />
                  <span>Benefits overview</span>
                </li>
              </ul>
              <Button className="w-full">Get Started</Button>
            </motion.div>

            {/* Pro Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background p-8 rounded-lg shadow-sm border-2 border-health-primary"
            >
              <h3 className="text-xl font-semibold mb-2">Pro</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-health-primary" />
                  <span>Advanced health analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-health-primary" />
                  <span>AI-powered burnout prevention</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-health-primary" />
                  <span>Full benefits management</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-health-primary" />
                  <span>Priority support</span>
                </li>
              </ul>
              <Button className="w-full">Get Pro</Button>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-background p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">Custom</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-health-primary" />
                  <span>Custom integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-health-primary" />
                  <span>Dedicated support team</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-health-primary" />
                  <span>Custom reporting</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-health-primary" />
                  <span>SLA guarantee</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">Contact Sales</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20">
        <div className="bg-muted rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Claims Processing?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join VSRs nationwide who are revolutionizing veterans benefits processing with Inversion+.
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
