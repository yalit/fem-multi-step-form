import useStore, { Actions, State } from "./store";

export function useCurrentStep() : number {
    return useStore((state) => state.currentStep)
}

export function useActions(): Actions {
    return useStore((state) => state.actions)
}
