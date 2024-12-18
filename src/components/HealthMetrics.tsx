import { Activity, Heart, Moon } from "lucide-react";
import { Card } from "@/components/ui/card";

const HealthMetrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fadeIn">
      <Card className="p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-health-primary/10 rounded-full">
            <Heart className="h-6 w-6 text-health-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Heart Rate</p>
            <h3 className="text-2xl font-semibold">72 BPM</h3>
          </div>
        </div>
      </Card>
      
      <Card className="p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-health-secondary/10 rounded-full">
            <Activity className="h-6 w-6 text-health-secondary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Activity</p>
            <h3 className="text-2xl font-semibold">8,432 steps</h3>
          </div>
        </div>
      </Card>
      
      <Card className="p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-health-accent/10 rounded-full">
            <Moon className="h-6 w-6 text-health-accent" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Sleep</p>
            <h3 className="text-2xl font-semibold">7h 23m</h3>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HealthMetrics;