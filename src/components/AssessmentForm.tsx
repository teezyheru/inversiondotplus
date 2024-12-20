import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { CheckboxGroup } from "@/components/AssessmentCheckboxGroup";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const AssessmentForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    stressLevel: 5,
    fatigueLevel: 5,
    workLifeBalance: 5,
    primaryStressors: [] as string[],
  });

  const handleStressorChange = (stressors: string[]) => {
    setFormData(prev => ({ ...prev, primaryStressors: stressors }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast.error("Please sign in to save your assessment");
        return;
      }

      const { error } = await supabase.from("assessments").insert({
        user_id: user.id,
        stress_level: formData.stressLevel,
        fatigue_level: formData.fatigueLevel,
        work_life_balance: formData.workLifeBalance,
        primary_stressors: formData.primaryStressors,
        recommendations: generateRecommendations(formData),
      });

      if (error) throw error;

      toast.success("Assessment completed successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error submitting assessment:", error);
      toast.error("Failed to save assessment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateRecommendations = (data: typeof formData) => {
    const recommendations: string[] = [];
    
    if (data.stressLevel > 7) {
      recommendations.push("Consider scheduling a meeting with your supervisor to discuss workload");
    }
    if (data.fatigueLevel > 7) {
      recommendations.push("Review your sleep schedule and consider sleep hygiene improvements");
    }
    if (data.workLifeBalance < 4) {
      recommendations.push("Set clear boundaries between work and personal time");
    }
    
    return recommendations;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-4">
        <div>
          <Label>Stress Level (1-10)</Label>
          <Slider
            value={[formData.stressLevel]}
            onValueChange={([value]) => setFormData(prev => ({ ...prev, stressLevel: value }))}
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
            value={[formData.fatigueLevel]}
            onValueChange={([value]) => setFormData(prev => ({ ...prev, fatigueLevel: value }))}
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
            value={[formData.workLifeBalance]}
            onValueChange={([value]) => setFormData(prev => ({ ...prev, workLifeBalance: value }))}
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

        <CheckboxGroup
          value={formData.primaryStressors}
          onChange={handleStressorChange}
        />
      </div>

      <Button 
        type="submit" 
        className="w-full bg-health-primary hover:bg-health-primary/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Complete Assessment"}
      </Button>
    </form>
  );
};

export default AssessmentForm;