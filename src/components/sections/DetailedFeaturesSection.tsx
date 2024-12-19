import { Check } from "lucide-react";

const DetailedFeaturesSection = () => {
  return (
    <section className="container py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Built for Shift Workers</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">For Workers</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Check className="h-6 w-6 text-health-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium">Personalized Support</p>
                <p className="text-muted-foreground">Get tailored advice based on your specific work patterns and stress triggers</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Check className="h-6 w-6 text-health-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium">Schedule Optimization</p>
                <p className="text-muted-foreground">Balance work demands with personal life through smart shift planning</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Check className="h-6 w-6 text-health-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium">Early Warning System</p>
                <p className="text-muted-foreground">Receive alerts before burnout becomes critical</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">For Employers</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Check className="h-6 w-6 text-health-secondary flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium">Reduce Turnover Costs</p>
                <p className="text-muted-foreground">Cut rehiring and training expenses by preventing burnout-related quits</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Check className="h-6 w-6 text-health-secondary flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium">Team Health Dashboard</p>
                <p className="text-muted-foreground">Monitor team well-being and identify stress patterns early</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Check className="h-6 w-6 text-health-secondary flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium">ROI Tracking</p>
                <p className="text-muted-foreground">Measure the impact on retention, productivity, and bottom line</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DetailedFeaturesSection;