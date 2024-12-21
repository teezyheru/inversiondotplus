import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface WorkScheduleInputsProps {
  workSchedule: string;
  averageShiftLength: number;
  preferredShiftTime: string;
  daysPerWeek: number;
  breakDuration: number;
  onWorkScheduleChange: (value: string) => void;
  onShiftLengthChange: (value: number) => void;
  onPreferredShiftTimeChange: (value: string) => void;
  onDaysPerWeekChange: (value: number) => void;
  onBreakDurationChange: (value: number) => void;
}

export const WorkScheduleInputs = ({
  workSchedule,
  averageShiftLength,
  preferredShiftTime,
  daysPerWeek,
  breakDuration,
  onWorkScheduleChange,
  onShiftLengthChange,
  onPreferredShiftTimeChange,
  onDaysPerWeekChange,
  onBreakDurationChange,
}: WorkScheduleInputsProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label>Current Work Schedule</Label>
        <Select 
          value={workSchedule}
          onValueChange={onWorkScheduleChange}
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
          value={averageShiftLength}
          onChange={(e) => onShiftLengthChange(parseInt(e.target.value))}
          className="mt-2"
        />
      </div>

      <div>
        <Label>Preferred Shift Time</Label>
        <Select 
          value={preferredShiftTime}
          onValueChange={onPreferredShiftTimeChange}
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
          value={daysPerWeek}
          onChange={(e) => onDaysPerWeekChange(parseInt(e.target.value))}
          className="mt-2"
        />
      </div>

      <div>
        <Label>Break Duration (minutes)</Label>
        <Input
          type="number"
          min={0}
          max={120}
          value={breakDuration}
          onChange={(e) => onBreakDurationChange(parseInt(e.target.value))}
          className="mt-2"
        />
      </div>
    </div>
  );
};