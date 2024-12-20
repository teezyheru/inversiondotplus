import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
    workSchedule: "regular",
    averageShiftLength: 8,
    preferredShiftTime: "day",
    daysPerWeek: 5,
    breakDuration: 60,
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
        work_schedule: formData.workSchedule,
        average_shift_length: formData.averageShiftLength,
        preferred_shift_time: formData.preferredShiftTime,
        days_per_week: formData.daysPerWeek,
        break_duration: formData.breakDuration,
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
    if (data.averageShiftLength > 10) {
      recommendations.push("Long shifts may increase fatigue. Consider shorter shifts if possible");
    }
    if (data.daysPerWeek > 5) {
      recommendations.push("Working 6+ days/week may lead to burnout. Try to ensure adequate rest days");
    }
    
    return recommendations;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-4">
        {/* Existing stress assessment fields */}
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

        {/* New work schedule fields */}
        <div className="space-y-4">
          <div>
            <Label>Current Work Schedule</Label>
            <Select 
              value={formData.workSchedule}
              onValueChange={(value) => setFormData(prev => ({ ...prev, workSchedule: value }))}
            >
              <SelectTrigger className="w-full mt-2">
                <SelectValue placeholder="Select your work schedule" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="regular">Regular (9-5)</SelectItem>
                <SelectItem value="rotating">Rotating Shifts</SelectItem>
                <SelectItem value="flexible">Flexible Hours</SelectItem>
                <SelectItem value="night">Night Shift</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Average Shift Length (hours)</Label>
            <Input
              type="number"
              min={1}
              max={24}
              value={formData.averageShiftLength}
              onChange={(e) => setFormData(prev => ({ ...prev, averageShiftLength: parseInt(e.target.value) }))}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Preferred Shift Time</Label>
            <Select 
              value={formData.preferredShiftTime}
              onValueChange={(value) => setFormData(prev => ({ ...prev, preferredShiftTime: value }))}
            >
              <SelectTrigger className="w-full mt-2">
                <SelectValue placeholder="Select preferred shift time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="morning">Morning (6AM-2PM)</SelectItem>
                <SelectItem value="day">Day (9AM-5PM)</SelectItem>
                <SelectItem value="evening">Evening (2PM-10PM)</SelectItem>
                <SelectItem value="night">Night (10PM-6AM)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Days Worked Per Week</Label>
            <Input
              type="number"
              min={1}
              max={7}
              value={formData.daysPerWeek}
              onChange={(e) => setFormData(prev => ({ ...prev, daysPerWeek: parseInt(e.target.value) }))}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Break Duration (minutes)</Label>
            <Input
              type="number"
              min={0}
              max={120}
              value={formData.breakDuration}
              onChange={(e) => setFormData(prev => ({ ...prev, breakDuration: parseInt(e.target.value) }))}
              className="mt-2"
            />
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
