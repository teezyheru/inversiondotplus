import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Clock, AlertTriangle } from "lucide-react";

interface Shift {
  id: string;
  start_time: string;
  end_time: string;
  shift_type: string;
  fatigue_risk_level: number;
}

interface Assessment {
  work_schedule: string;
  average_shift_length: number;
  preferred_shift_time: string;
  days_per_week: number;
  break_duration: number;
  recommendations: string[];
}

const SmartScheduling = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [assessment, setAssessment] = useState<Assessment | null>(null);
  const [shifts, setShifts] = useState<Shift[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  useEffect(() => {
    fetchLatestAssessment();
    fetchShifts();
  }, []);

  const fetchLatestAssessment = async () => {
    try {
      const { data: assessmentData, error } = await supabase
        .from("assessments")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      if (error) throw error;
      
      if (!assessmentData) {
        toast.error("No assessment found. Please complete an assessment first.");
        navigate("/assessment");
        return;
      }

      setAssessment(assessmentData);
    } catch (error) {
      console.error("Error fetching assessment:", error);
      toast.error("Failed to load assessment data");
    }
  };

  const fetchShifts = async () => {
    try {
      const { data: shiftsData, error } = await supabase
        .from("shifts")
        .select("*")
        .order("start_time", { ascending: true });

      if (error) throw error;
      setShifts(shiftsData || []);
    } catch (error) {
      console.error("Error fetching shifts:", error);
      toast.error("Failed to load shift data");
    } finally {
      setLoading(false);
    }
  };

  const optimizeSchedule = async () => {
    // This would be where we implement the schedule optimization logic
    toast.info("Schedule optimization coming soon!");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-health-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Smart Scheduling</h1>
          <p className="text-muted-foreground text-lg">
            Optimize your work schedule based on your assessment results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Your Preferences</h2>
            {assessment ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Preferred Schedule:</span>
                  <span className="font-medium">{assessment.work_schedule}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Preferred Shift Time:</span>
                  <span className="font-medium">{assessment.preferred_shift_time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Days per Week:</span>
                  <span className="font-medium">{assessment.days_per_week}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Shift Length:</span>
                  <span className="font-medium">{assessment.average_shift_length} hours</span>
                </div>
              </div>
            ) : (
              <p className="text-muted-foreground">No preferences found. Please complete an assessment.</p>
            )}
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Recommendations</h2>
            {assessment?.recommendations ? (
              <ul className="space-y-3">
                {assessment.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-health-primary flex-shrink-0 mt-1" />
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground">No recommendations available.</p>
            )}
          </Card>

          <Card className="p-6 md:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Schedule Overview</h2>
              <Button onClick={optimizeSchedule}>
                Optimize Schedule
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => date && setSelectedDate(date)}
                className="rounded-md border"
              />
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Upcoming Shifts</h3>
                {shifts.length > 0 ? (
                  <div className="space-y-3">
                    {shifts.map((shift) => (
                      <div
                        key={shift.id}
                        className="flex items-center justify-between p-3 border rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <Clock className="h-5 w-5 text-health-secondary" />
                          <div>
                            <p className="font-medium">{shift.shift_type}</p>
                            <p className="text-sm text-muted-foreground">
                              {new Date(shift.start_time).toLocaleString()} - {new Date(shift.end_time).toLocaleString()}
                            </p>
                          </div>
                        </div>
                        {shift.fatigue_risk_level > 7 && (
                          <AlertTriangle className="h-5 w-5 text-destructive" />
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">No upcoming shifts</p>
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SmartScheduling;