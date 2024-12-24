import { create } from 'zustand';

interface FormData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // Address Details
  street: string;
  city: string;
  state: string;
  zipCode: string;
  
  // Preferences
  notifications: boolean;
  newsletter: boolean;
  darkMode: boolean;
}

interface FormState {
  currentStep: number;
  formData: FormData;
  setFormData: (data: Partial<FormData>) => void;
  setCurrentStep: (step: number) => void;
}

export const useFormStore = create<FormState>((set) => ({
  currentStep: 1,
  formData: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    notifications: false,
    newsletter: false,
    darkMode: false,
  },
  setFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),
  setCurrentStep: (step) => set({ currentStep: step }),
}));