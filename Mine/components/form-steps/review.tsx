'use client';

import { Button } from '@/components/ui/button';
import { useFormStore } from '@/lib/store';
import { useToast } from '@/hooks/use-toast';

export function ReviewForm() {
  const { toast } = useToast();
  const { formData, setCurrentStep } = useFormStore();

  const handleSubmit = async () => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: 'Form submitted successfully!',
      description: 'Thank you for completing the form.',
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <section className="space-y-2">
          <h3 className="text-lg font-semibold">Personal Information</h3>
          <div className="grid grid-cols-2 gap-4 rounded-lg border p-4">
            <div>
              <p className="text-sm text-muted-foreground">First Name</p>
              <p className="font-medium">{formData.firstName}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Last Name</p>
              <p className="font-medium">{formData.lastName}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium">{formData.email}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="font-medium">{formData.phone}</p>
            </div>
          </div>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-semibold">Address Details</h3>
          <div className="rounded-lg border p-4 space-y-2">
            <p className="font-medium">{formData.street}</p>
            <p className="font-medium">
              {formData.city}, {formData.state} {formData.zipCode}
            </p>
          </div>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-semibold">Preferences</h3>
          <div className="rounded-lg border p-4 space-y-2">
            <div className="flex justify-between">
              <span>Push Notifications</span>
              <span>{formData.notifications ? 'Enabled' : 'Disabled'}</span>
            </div>
            <div className="flex justify-between">
              <span>Newsletter</span>
              <span>{formData.newsletter ? 'Subscribed' : 'Not subscribed'}</span>
            </div>
            <div className="flex justify-between">
              <span>Dark Mode Default</span>
              <span>{formData.darkMode ? 'Enabled' : 'Disabled'}</span>
            </div>
          </div>
        </section>
      </div>

      <div className="flex gap-4">
        <Button 
          type="button" 
          variant="outline" 
          onClick={() => setCurrentStep(3)}
          className="w-full"
        >
          Back
        </Button>
        <Button 
          onClick={handleSubmit}
          className="w-full"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}