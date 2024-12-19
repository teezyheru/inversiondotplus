import { Check } from "lucide-react";

const DetailedFeaturesSection = () => {
  return (
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
  );
};

export default DetailedFeaturesSection;