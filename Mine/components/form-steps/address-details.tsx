'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { MapPin, Building, Flag, Map } from 'lucide-react'; // Importing icons from Lucide

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useFormStore } from '@/lib/store';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  street: z.string().min(5, 'Street address must be at least 5 characters'),
  city: z.string().min(2, 'City must be at least 2 characters'),
  state: z.string().length(2, 'Please use 2-letter state code'),
  zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, 'Invalid ZIP code format'),
});

export function AddressDetailsForm() {
  const { toast } = useToast();
  const { formData, setFormData, setCurrentStep } = useFormStore();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      street: formData.street,
      city: formData.city,
      state: formData.state,
      zipCode: formData.zipCode,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setFormData(values);
    setCurrentStep(3);
    toast({
      title: 'Progress saved',
      description: 'Your address details have been saved.',
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="street"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Street Address</FormLabel>
              <FormControl>
                <div className="flex items-center space-x-2 border-b-2 border-b-indigo-700 rounded-none">
                  <MapPin className="text-gray-400" />
                  <Input 
                    placeholder="87 North Street" 
                    {...field} 
                    className="border-0 focus:border-0 focus:border-none  focus:ring-0 rounded-none" 
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <div className="flex items-center space-x-2 border-b-2 border-b-indigo-700 rounded-none">
                  <Building className="text-gray-400" />
                  <Input 
                    placeholder="Guwahati" 
                    {...field} 
                    className="border-0 focus:border-0 focus:border-none  focus:ring-0 rounded-none" 
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <FormControl>
                  <div className="flex items-center space-x-2 border-b-2 border-b-indigo-700 rounded-none">
                    <Flag className="text-gray-400" />
                    <Input 
                      placeholder="Assam" 
                      maxLength={2} 
                      {...field} 
                      className="border-0 focus:border-0 focus:border-none  focus:ring-0 rounded-none" 
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zipCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ZIP Code</FormLabel>
                <FormControl>
                  <div className="flex items-center space-x-2 border-b-2 border-b-indigo-700 rounded-none">
                    <Map className="text-gray-400" />
                    <Input 
                      placeholder="12345" 
                      {...field} 
                      className="border-0 focus:border-0 focus:border-none  focus:ring-0 rounded-none" 
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-4">
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => setCurrentStep(1)}
            className="w-full"
          >
            Back
          </Button>
          <Button type="submit"  className="w-full text-white bg-indigo-900 hover:bg-yellow-300 hover:text-black hover:transition-colors hover:duration-500 hover:ease-in-out">Continue</Button>
        </div>
      </form>
    </Form>
  );
}
