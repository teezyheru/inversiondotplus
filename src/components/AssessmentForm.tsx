import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckboxGroup } from "@/components/AssessmentCheckboxGroup";
import { StressMetrics } from "@/components/StressMetrics";
import { WorkScheduleInputs } from "@/components/WorkScheduleInputs";
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
    workSchedule: "regular",
    averageShiftLength: 8,
    preferredShiftTime: "day",
    daysPerWeek: 5,
    breakDuration: 60,
  });

  const handleStressorChange = (stressors: string[]) => {
    setFormData(prev => ({ ...prev, primaryStressors: stressors }));
  };

  const generateRecommendations = (data: typeof formData) => {
    const recommendations: string[] = [];
    
    // Basic stress-related recommendations
    if (data.stressLevel > 7) {
      recommendations.push("Consider scheduling a meeting with your supervisor to discuss workload");
    }
    if (data.fatigueLevel > 7) {
      recommendations.push("Review your sleep schedule and consider sleep hygiene improvements");
    }
    if (data.workLifeBalance < 4) {
      recommendations.push("Set clear boundaries between work and personal time");
    }

    // Smart scheduling recommendations
    if (data.averageShiftLength > 10) {
      recommendations.push("Long shifts may increase fatigue. Consider shorter shifts if possible");
    }
    if (data.daysPerWeek > 5) {
      recommendations.push("Working 6+ days/week may lead to burnout. Try to ensure adequate rest days");
    }
    if (data.workSchedule === "night") {
      recommendations.push("Night shifts can disrupt natural sleep patterns. Maintain a consistent sleep schedule even on days off");
    }
    if (data.breakDuration < 30) {
      recommendations.push("Short breaks may not provide adequate rest. Consider taking longer breaks when possible");
    }
    if (data.preferredShiftTime !== data.workSchedule) {
      recommendations.push("Current schedule doesn't match your preferred time. Discuss possible schedule adjustments with your supervisor");
    }
    
    return recommendations;
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
        work_schedule: formData.workSchedule,
        average_shift_length: formData.averageShiftLength,
        preferred_shift_time: formData.preferredShiftTime,
        days_per_week: formData.daysPerWeek,
        break_duration: formData.breakDuration,
      });

      if (error) throw error;

      toast.success("Assessment completed successfully!");
      navigate("/smart-scheduling");
    } catch (error) {
      console.error("Error submitting assessment:", error);
      toast.error("Failed to save assessment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-4">
        <StressMetrics
          stressLevel={formData.stressLevel}
          fatigueLevel={formData.fatigueLevel}
          workLifeBalance={formData.workLifeBalance}
          onStressChange={(value) => setFormData(prev => ({ ...prev, stressLevel: value }))}
          onFatigueChange={(value) => setFormData(prev => ({ ...prev, fatigueLevel: value }))}
          onWorkLifeBalanceChange={(value) => setFormData(prev => ({ ...prev, workLifeBalance: value }))}
        />

        <WorkScheduleInputs
          workSchedule={formData.workSchedule}
          averageShiftLength={formData.averageShiftLength}
          preferredShiftTime={formData.preferredShiftTime}
          daysPerWeek={formData.daysPerWeek}
          breakDuration={formData.breakDuration}
          onWorkScheduleChange={(value) => setFormData(prev => ({ ...prev, workSchedule: value }))}
          onShiftLengthChange={(value) => setFormData(prev => ({ ...prev, averageShiftLength: value }))}
          onPreferredShiftTimeChange={(value) => setFormData(prev => ({ ...prev, preferredShiftTime: value }))}
          onDaysPerWeekChange={(value) => setFormData(prev => ({ ...prev, daysPerWeek: value }))}
          onBreakDurationChange={(value) => setFormData(prev => ({ ...prev, breakDuration: value }))}
        />

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