import { AlertTriangle, Battery, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const BurnoutRisk = () => {
  const riskLevel = 35;
  
  return (
    <Card className="p-6 mt-6 animate-fadeIn">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="h-5 w-5 text-health-primary" />
          <h3 className="text-lg font-semibold">Burnout Risk Assessment</h3>
        </div>
        <span className="text-sm text-muted-foreground">Updated 2h ago</span>
      </div>
      
      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Overall Risk Level</span>
            <span className="text-sm text-muted-foreground">{riskLevel}%</span>
          </div>
          <Progress value={riskLevel} className="h-2" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3">
            <Clock className="h-5 w-5 text-health-secondary" />
            <div>
              <p className="text-sm font-medium">Next Shift</p>
              <p className="text-sm text-muted-foreground">In 14 hours</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Battery className="h-5 w-5 text-health-accent" />
            <div>
              <p className="text-sm font-medium">Energy Level</p>
              <p className="text-sm text-muted-foreground">75% - Good</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BurnoutRisk;