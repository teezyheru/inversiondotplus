import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface StressMetricsProps {
  stressLevel: number;
  fatigueLevel: number;
  workLifeBalance: number;
  onStressChange: (value: number) => void;
  onFatigueChange: (value: number) => void;
  onWorkLifeBalanceChange: (value: number) => void;
}

export const StressMetrics = ({
  stressLevel,
  fatigueLevel,
  workLifeBalance,
  onStressChange,
  onFatigueChange,
  onWorkLifeBalanceChange,
}: StressMetricsProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label>Stress Level (1-10)</Label>
        <Slider
          value={[stressLevel]}
          onValueChange={([value]) => onStressChange(value)}
          max={10}
          min={1}
          step={1}
          className="mt-2"
        />
        <div className="flex justify-between mt-1">
          <span className="text-sm text-muted-foreground">Low</span>
          <span className="text-sm text-muted-foreground">High</span>
        </div>
      </div>

      <div>
        <Label>Fatigue Level (1-10)</Label>
        <Slider
          value={[fatigueLevel]}
          onValueChange={([value]) => onFatigueChange(value)}
          max={10}
          min={1}
          step={1}
          className="mt-2"
        />
        <div className="flex justify-between mt-1">
          <span className="text-sm text-muted-foreground">Low</span>
          <span className="text-sm text-muted-foreground">High</span>
        </div>
      </div>

      <div>
        <Label>Work-Life Balance (1-10)</Label>
        <Slider
          value={[workLifeBalance]}
          onValueChange={([value]) => onWorkLifeBalanceChange(value)}
          max={10}
          min={1}
          step={1}
          className="mt-2"
        />
        <div className="flex justify-between mt-1">
          <span className="text-sm text-muted-foreground">Poor</span>
          <span className="text-sm text-muted-foreground">Excellent</span>
        </div>
      </div>
    </div>
  );
};