import { CheckCircle2, FileText, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const BenefitsStatus = () => {
  return (
    <Card className="p-6 mt-6 animate-fadeIn">
      <div className="flex items-center space-x-2 mb-6">
        <FileText className="h-5 w-5 text-health-secondary" />
        <h3 className="text-lg font-semibold">Benefits & Claims</h3>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
          <div className="flex items-center space-x-3">
            <CheckCircle2 className="h-5 w-5 text-health-accent" />
            <div>
              <p className="font-medium">Disability Claim</p>
              <p className="text-sm text-muted-foreground">Status: In Review</p>
            </div>
          </div>
          <span className="text-sm text-muted-foreground">Updated 3d ago</span>
        </div>
        
        <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
          <div className="flex items-center space-x-3">
            <Calendar className="h-5 w-5 text-health-primary" />
            <div>
              <p className="font-medium">Next Appointment</p>
              <p className="text-sm text-muted-foreground">March 15, 2024</p>
            </div>
          </div>
          <button className="text-sm text-health-secondary hover:underline">
            Reschedule
          </button>
        </div>
      </div>
    </Card>
  );
};

export default BenefitsStatus;