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
        Built for Veterans
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-semibold">For Veterans</h3>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <Check className="h-6 w-6 text-health-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium mb-1">Personalized Support</p>
                <p className="text-muted-foreground leading-relaxed">
                  Tailored advice based on your unique audio cues and stress patterns.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Check className="h-6 w-6 text-health-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium mb-1">Early Intervention</p>
                <p className="text-muted-foreground leading-relaxed">
                  Receive real-time alerts before symptoms become overwhelming.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Check className="h-6 w-6 text-health-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium mb-1">Natural Conversations</p>
                <p className="text-muted-foreground leading-relaxed">
                  Share your thoughts in a format that feels like talking to a trusted ally.
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
          <h3 className="text-2xl font-semibold">For Clinicians</h3>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <Check className="h-6 w-6 text-health-secondary flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium mb-1">Accurate Diagnostics</p>
                <p className="text-muted-foreground leading-relaxed">
                  Use structured insights derived from audio and emotional analysis to make data-driven decisions.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Check className="h-6 w-6 text-health-secondary flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium mb-1">Reduce Subjectivity</p>
                <p className="text-muted-foreground leading-relaxed">
                  Eliminate guesswork with objective data that captures both verbal and non-verbal cues.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Check className="h-6 w-6 text-health-secondary flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium mb-1">Time-Efficient</p>
                <p className="text-muted-foreground leading-relaxed">
                  Streamline diagnostic processes while maintaining precision.
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