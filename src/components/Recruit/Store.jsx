import React from 'react';
import { create } from 'zustand';
const useStore = create((set) => ({
  name: '',
  studentId: '',
  email: '',
  field: '',
  phone_number: '',
  password: '',
  githubAddress: '',
  answer: [],
  selectedTimeSlots: new Array(9).fill(false),

  setAnswer: (index, answer) =>
    set((state) => {
      const newAnswer = [...state.answer];
      newAnswer[index] = answer;
      return { ...state, answer: newAnswer };
    }),
  setName: (name) => set(() => ({ name })),
  setStudentId: (studentId) => set(() => ({ studentId })),
  setEmail: (email) => set(() => ({ email })),
  setField: (field) => set(() => ({ field })),
  setPassword: (password) => set(() => ({ password })),
  setPhoneNumber: (phone_number) => set(() => ({ phone_number })),
  setGithubAddress: (githubAddress) => set(() => ({ githubAddress })),
  currentStep: 0,
  setCurrentStep: (step) => set({ currentStep: step }),

  goNext: () =>
    set((state) => ({
      currentStep:
        state.currentStep < 4 ? state.currentStep + 1 : state.currentStep,
    })),

  submitTime: '',
  setSubmitTime: (submitTime) => set(() => ({ submitTime })),
  setSelectedTimeSlots: (selectedTimeSlots) => set({ selectedTimeSlots}),
}));

export default useStore;
