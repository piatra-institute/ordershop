import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

// Required for zustand.
import type { } from '@redux-devtools/extension';



export type MenuView =
    | 'general' | 'about'
    | 'orders' | 'shops'
    | 'settings';


export interface VolatileState {
    showLoading: boolean;
    setShowLoading: (loading: boolean) => void;

    hasMediaDevices: boolean;
    setHasMediaDevices: (hasMediaDevices: boolean) => void;

    showText: boolean;
    setShowText: (showText: boolean) => void;

    showCamera: boolean;
    setShowCamera: (showCamera: boolean) => void;

    showMicrophone: boolean;
    setShowMicrophone: (showMicrophone: boolean) => void;

    showMenu: boolean;
    setShowMenu: (showMenu: boolean) => void;
    menuView: MenuView;
    setMenuView: (view: MenuView) => void;
    editID: string;
    setEditID: (id: string) => void;

    clearVolatileStore: () => void;
}


export const initialVolatileState = {
    showLoading: false,
    hasMediaDevices: true,
    showText: false,
    showCamera: false,
    showMicrophone: false,
    showActsModal: false,
    showMenu: true,
    menuView: 'general',
    editID: '',
};


const useVolatileStore = create<VolatileState>()(
    devtools(
    immer(
        (set) => ({
            showLoading: initialVolatileState.showLoading,
            setShowLoading: (showLoading: boolean) => set({ showLoading }),

            hasMediaDevices: initialVolatileState.hasMediaDevices,
            setHasMediaDevices: (hasMediaDevices: boolean) => set({ hasMediaDevices }),

            showText: initialVolatileState.showText,
            setShowText: (showText: boolean) => set({ showText }),

            showCamera: initialVolatileState.showCamera,
            setShowCamera: (showCamera: boolean) => set({ showCamera }),

            showMicrophone: initialVolatileState.showMicrophone,
            setShowMicrophone: (showMicrophone: boolean) => set({ showMicrophone }),

            showMenu: initialVolatileState.showMenu,
            setShowMenu: (showMenu: boolean) => set({ showMenu }),
            menuView: initialVolatileState.menuView as MenuView,
            setMenuView: (menuView: MenuView) => set({ menuView }),
            editID: initialVolatileState.editID,
            setEditID: (editID: string) => set({ editID }),

            clearVolatileStore: () => set(() => ({
                ...initialVolatileState,
            })),
        }),
    ),
    ),
);


export default useVolatileStore;
