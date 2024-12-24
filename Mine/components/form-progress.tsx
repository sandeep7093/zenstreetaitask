'use client';

import { Progress } from '@/components/ui/progress';
import { useFormStore } from '@/lib/store';

export function FormProgress() {
  const currentStep = useFormStore((state) => state.currentStep);
  const progress = (currentStep / 4) * 100;

  return (
    <div className="w-full space-y-2">
      <Progress value={progress} className="h-2" />
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>Step {currentStep} of 4</span>
        <span>{Math.round(progress)}%</span>
      </div>
    </div>
  );
}