import create from 'zustand';
const useStore = create((set) => ({
  isTrue: false,
  makeTrue: () => set({ isTrue: true }),
  makeFalse: () => set({ isTrue: false }),
}));
