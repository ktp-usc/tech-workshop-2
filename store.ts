import { create } from "zustand/react";
import { persist } from "zustand/middleware";


type CounterStore = {
    count: number

    increment: () => void;
    decrement: () => void;
}

export const useCounterStore = create<CounterStore>(
    (set) => ({
        count: 0,
        increment: () => {
            set((state) => ({ count: state.count + 1 }))
        },
        decrement: () => {
            set((state) => ({ count: state.count - 1 }))
        }
    }),
);

export const usePersistentCounterStore = create<CounterStore>()(
    persist((set) => ({
        count: 0,
        increment: () => {
            set((state) => ({ count: state.count + 1 }))
        },
        decrement: () => {
            set((state) => ({ count: state.count - 1 }))
        }
    }),
        {
            name: "counter-store"
        }
    )
);
