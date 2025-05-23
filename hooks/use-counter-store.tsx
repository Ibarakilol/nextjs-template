import { create } from 'zustand';

type CounterStore = {
  counter: number;
  onDecrement: () => void;
  onIncrement: () => void;
};

export const useCounterStore = create<CounterStore>((set, get) => ({
  counter: 0,
  onDecrement: () => set({ counter: get().counter > 0 ? get().counter - 1 : 0 }),
  onIncrement: () => set({ counter: get().counter + 1 }),
}));
