import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

// Required for zustand.
import type { } from '@redux-devtools/extension';

import {
    User,
} from '@/data';

import useVolatileStore from './volatileStore';



export interface State {
    user: User | null;
    setUser: (user: User | null) => void;
    usingLocalStorage: boolean;
    toggleUsingLocalStorage: () => void;
}


const useStore = create<State>()(
    devtools(
    persist(
    immer(
        (set) => ({
            user: null,
            setUser: (user: User | null) => set({ user }),
            usingLocalStorage: true,
            toggleUsingLocalStorage: () => set((state) => ({ usingLocalStorage: !state.usingLocalStorage })),
        }),
    ),
        {
            name: 'ORDSHP',
        },
    ),
    ),
);


export default useStore;

export {
    useVolatileStore,
};
