import { create } from 'zustand'
import FormData, { initialFormData } from '../interfaces/formData.interface';
import Step from '../interfaces/step.interface';
import stepsRepository from '../repository/steps.repository';

export interface State {
    currentStep: Step|null,
    formDatas: FormData
}

export interface Actions {
    goToStep: (step: Step) => void,
    goToNextAndSave: (formData: Partial<FormData>) => void,
    goToPrevious: () => void,
    updateFormData: (formData: Partial<FormData>) => void
}


const useStore = create<State & {actions: Actions}>()((set) => ({
    currentStep: null, 
    formDatas: initialFormData,
    actions: {
        goToStep: (step: Step) => set(() => ({currentStep: step})),
        goToNextAndSave: (formData: Partial<FormData>) => set((state) => ({currentStep: stepsRepository.getNext(state.currentStep) ?? state.currentStep, formDatas: {...state.formDatas, ...formData}})),
        goToPrevious: () => set((state) => ({currentStep:stepsRepository.getPrevious(state.currentStep) ?? state.currentStep})),
        updateFormData: (data: Partial<FormData>) => set((state) => ({formDatas: {...state.formDatas, ...data}}))
    }
}))

export default useStore;

