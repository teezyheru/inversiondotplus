import HealthMetrics from "@/components/HealthMetrics";
import BurnoutRisk from "@/components/BurnoutRisk";
import BenefitsStatus from "@/components/BenefitsStatus";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="space-y-2 mb-8">
          <h1 className="text-4xl font-bold tracking-tight">Health Dashboard</h1>
          <p className="text-muted-foreground">
            Track your health metrics, manage burnout, and monitor benefits
          </p>
        </div>
        
        <HealthMetrics />
        <BurnoutRisk />
        <BenefitsStatus />
      </div>
    </div>
  );
};

export default Index;