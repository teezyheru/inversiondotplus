import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const STRESSOR_OPTIONS = [
  { id: "workload", label: "Heavy workload" },
  { id: "schedule", label: "Irregular schedule" },
  { id: "support", label: "Lack of support" },
  { id: "balance", label: "Poor work-life balance" },
  { id: "recognition", label: "Lack of recognition" },
  { id: "resources", label: "Insufficient resources" },
];

interface CheckboxGroupProps {
  value: string[];
  onChange: (value: string[]) => void;
}

export const CheckboxGroup = ({ value, onChange }: CheckboxGroupProps) => {
  const handleCheckboxChange = (id: string, checked: boolean) => {
    if (checked) {
      onChange([...value, id]);
    } else {
      onChange(value.filter(item => item !== id));
    }
  };

  return (
    <div className="space-y-4">
      <Label>Primary Stressors (Select all that apply)</Label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {STRESSOR_OPTIONS.map((option) => (
          <div key={option.id} className="flex items-center space-x-2">
            <Checkbox
              id={option.id}
              checked={value.includes(option.id)}
              onCheckedChange={(checked) => handleCheckboxChange(option.id, checked as boolean)}
            />
            <Label htmlFor={option.id} className="text-sm font-normal">
              {option.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};