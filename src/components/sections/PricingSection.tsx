import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const PricingSection = () => {
  return (
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
                <span>Email support</span>
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
                <span>Priority support</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-health-primary" />
                <span>Custom reports</span>
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
  );
};

export default PricingSection;