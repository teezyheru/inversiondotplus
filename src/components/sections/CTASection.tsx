import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="container py-20">
      <div className="bg-muted rounded-lg p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Stop Losing Your Best People</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Cut turnover costs by 50% with our precision burnout prevention platform. Start with a free trial today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="gap-2">
            Start Free Trial <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;