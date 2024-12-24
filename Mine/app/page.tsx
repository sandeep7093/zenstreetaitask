'use client';

import { FormProgress } from '@/components/form-progress';
import { PersonalInfoForm } from '@/components/form-steps/personal-info';
import { AddressDetailsForm } from '@/components/form-steps/address-details';
import { PreferencesForm } from '@/components/form-steps/preferences';
import { ReviewForm } from '@/components/form-steps/review';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useFormStore } from '@/lib/store';

export default function Home() {
  const currentStep = useFormStore((state) => state.currentStep);

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <FormProgress />
      
      <Card>
        <CardHeader>
          <CardTitle>
            {currentStep === 1 && 'Personal Information'}
            {currentStep === 2 && 'Address Details'}
            {currentStep === 3 && 'Preferences'}
            {currentStep === 4 && 'Review & Submit'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {currentStep === 1 && <PersonalInfoForm />}
          {currentStep === 2 && <AddressDetailsForm />}
          {currentStep === 3 && <PreferencesForm />}
          {currentStep === 4 && <ReviewForm />}
        </CardContent>
      </Card>
    </div>
  );
}