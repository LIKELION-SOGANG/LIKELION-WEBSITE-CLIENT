import create from 'zustand';
const useScrollStore = create((set) => ({
  isTrue: false,
  makeTrue: () => set({ isTrue: true }),
  makeFalse: () => set({ isTrue: false }),
}));
