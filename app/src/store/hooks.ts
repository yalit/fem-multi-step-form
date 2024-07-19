import Step from "../interfaces/step.interface";
import useStore, { Actions } from "./store";
import FormData from "../interfaces/formData.interface";
import {Currency} from "../interfaces/price.interface.ts";

export function useCurrentStep() : Step|null {
    return useStore((state) => state.currentStep)
}

export function useCurrency() : Currency {
    return useStore((state) => state.currency)
}

export function useData(): FormData {
    return useStore((state) => state.formDatas)
}

export function useActions(): Actions {
    return useStore((state) => state.actions)
}
