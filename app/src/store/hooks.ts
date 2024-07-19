import Step from "../interfaces/step.interface";
import useStore, { Actions, State } from "./store";

export function useCurrentStep() : Step {
    return useStore((state) => state.currentStep)
}

export function useActions(): Actions {
    return useStore((state) => state.actions)
}
