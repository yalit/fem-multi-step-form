import Step from "../interfaces/step.interface";
import useStore, { Actions, State } from "./store";
import FormData from "../interfaces/formData.interface";

export function useCurrentStep() : Step {
    return useStore((state) => state.currentStep)
}

export function useData(): FormData {
    return useStore((state) => state.formDatas)
}


export function useActions(): Actions {
    return useStore((state) => state.actions)
}
