import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
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
  );
};

export default CTASection;