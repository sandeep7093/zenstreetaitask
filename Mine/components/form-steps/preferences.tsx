import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Switch } from '@/components/ui/switch';
import { useFormStore } from '@/lib/store';
import { useToast } from '@/hooks/use-toast';
import exp from 'node:constants';

const formSchema = z.object({
  notifications: z.boolean(),
  newsletter: z.boolean(),
  darkMode: z.boolean(),
});

export function PreferencesForm() {
  const { toast } = useToast();
  const { formData, setFormData, setCurrentStep } = useFormStore();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      notifications: formData.notifications,
      newsletter: formData.newsletter,
      darkMode: formData.darkMode,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setFormData(values);
    setCurrentStep(4);
    toast({
      title: 'Progress saved',
      description: 'Your preferences have been saved.',
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="notifications"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Push Notifications</FormLabel>
                <FormDescription>
                  Receive notifications about updates and activity.
                </FormDescription>
              </div>
              <FormControl className='bg-black'>
                <Switch
                  className='bg-red-500'
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="newsletter"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Newsletter</FormLabel>
                <FormDescription>
                  Receive our weekly newsletter with updates.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="darkMode"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Dark Mode Default</FormLabel>
                <FormDescription>
                  Set dark mode as your default theme.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex gap-4">
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => setCurrentStep(2)}
            className="w-full"
          >
            Back
          </Button>
          <Button type="submit" className="w-full">Review</Button>
        </div>
      </form>
    </Form>
  );
}
export default PreferencesForm;