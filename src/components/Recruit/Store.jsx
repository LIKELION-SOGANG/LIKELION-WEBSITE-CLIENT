import React from 'react';
import { create } from 'zustand';
const useStore = create((set) => ({
  name: '',
  student_number: '',
  email: '',
  field: '',
  setName: (name) => set(() => ({ name })),
  setStudentId: (student_number) => set(() => ({ student_number })),
  setEmail: (email) => set(() => ({ email })),
  setField: (field) => set(() => ({ field })),

  currentStep: 0,
  setCurrentStep: (step) => set({ currentStep: step }),

  goNext: () =>
    set((state) => ({
      currentStep:
        state.currentStep < 3 ? state.currentStep + 1 : state.currentStep,
    })),

  submitTime: '',
  setSubmitTime: (submitTime) => set(() => ({ submitTime })),
}));

export default useStore;
