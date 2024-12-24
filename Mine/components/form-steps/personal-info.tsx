
'use client';

import { motion } from 'framer-motion';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { User, Mail, Phone } from 'lucide-react'; // Importing icons from Lucide

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
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
});

export function PersonalInfoForm() {
  const { toast } = useToast();
  const { formData, setFormData, setCurrentStep } = useFormStore();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setFormData(values);
    setCurrentStep(2);
    toast({
      title: 'Progress saved',
      description: 'Your personal information has been saved.',
    });
  }

  return (
    <div className="relative min-h-[80%]">  
      <div className="relative container mx-auto px-2">
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6  p-2 rounded shadow-md">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <div className="flex items-center  border-b-2 border-b-indigo-700 rounded-none">
                      <User className="text-gray-400" />
                      <Input 
                        placeholder="John" 
                        {...field} 
                        className='border-0 focus:outline-none focus:ring-0 rounded-none border-transparent'
                      />
                    </div>
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.firstName && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {form.formState.errors.firstName.message}
                      </motion.div>
                    )}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <div className="flex items-center space-x-2 border-b-2 border-b-indigo-700 rounded-none">
                      <User className="text-gray-400" />
                      <Input 
                        placeholder="Doe" 
                        {...field} 
                        className='border-0 focus:outline-none focus:ring-0 rounded-none border-transparent'
                      />
                    </div>
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.lastName && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {form.formState.errors.lastName.message}
                      </motion.div>
                    )}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <div className="flex items-center space-x-2 border-b-2 border-b-indigo-700 rounded-none">
                      <Mail className="text-gray-400" />
                      <Input 
                        placeholder="john.doe@example.com" 
                        {...field} 
                        className='border-0 focus:outline-none focus:ring-0 rounded-none border-transparent'
                      />
                    </div>
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.email && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {form.formState.errors.email.message}
                      </motion.div>
                    )}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <div className="flex items-center space-x-2 border-b-2 border-b-indigo-700 rounded-none">
                      <Phone className="text-gray-400" />
                      <Input 
                        placeholder="9987654695" 
                        {...field} 
                        className='border-0 focus:outline-none focus:ring-0 rounded-none border-transparent'
                      />
                    </div>
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.phone && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {form.formState.errors.phone.message}
                      </motion.div>
                    )}
                  </FormMessage>
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-indigo-900 hover:bg-yellow-300 hover:text-black hover:transition-colors hover:duration-500 hover:ease-in-out">
              Continue
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
