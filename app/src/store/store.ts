import { create } from 'zustand'

export const MIN_STEP = 1;
export const MAX_STEP = 4;

export interface State {
    currentStep: number
}

export interface Actions {
    goToNext: () => void,
    goToPrevious: () => void
}

const useStore = create<State & {actions: Actions}>()((set) => ({
    currentStep:  1,
    actions: {
        goToNext: () => set((state) => ({currentStep: state.currentStep < MAX_STEP ? state.currentStep + 1 : state.currentStep })),
        goToPrevious: () => set((state) => ({currentStep: state.currentStep > MIN_STEP ? state.currentStep - 1 : state.currentStep }))
    }
}))

export default useStore;

