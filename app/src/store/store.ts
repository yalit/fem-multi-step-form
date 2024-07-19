import { create } from 'zustand'
import FormData, { initialFormData } from '../interfaces/formData.interface';
import Step from '../interfaces/step.interface';
import { initialStep } from './formSteps';

export interface State {
    currentStep: Step,
    formDatas: FormData
}

export interface Actions {
    goToNext: () => void,
    goToPrevious: () => void,
    updateFormData: (formData: Partial<FormData>) => void
}

const useStore = create<State & {actions: Actions}>()((set) => ({
    currentStep:  initialStep,
    formDatas: initialFormData,
    actions: {
        goToNext: () => set((state) => ({currentStep: state.currentStep.next ?? state.currentStep})),
        goToPrevious: () => set((state) => ({currentStep: state.currentStep.previous ?? state.currentStep})),
        updateFormData: (data: Partial<FormData>) => set((state) => ({formDatas: {...state.formDatas, ...data}}))
    }
}))

export default useStore;

