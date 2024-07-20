import { AddonsStep } from "../../components/formSteps/addons.step.tsx";
import { PersonalInfoStep } from "../../components/formSteps/personalInfo.step.tsx";
import { SelectPlanStep } from "../../components/formSteps/selectPlan.step.tsx";
import { SummaryStep } from "../../components/formSteps/summary.step.tsx";
import Step from "../../interfaces/step.interface.ts";
import {ConfirmationStep} from "../../components/formSteps/confirmation.step.tsx";

export const SELECT_PLAN_NAME = 'Select plan';

const steps: Step[] = [
    {name: 'Your info', number: 1, display: <PersonalInfoStep />}, 
    {name: SELECT_PLAN_NAME, number: 2, display: <SelectPlanStep />},
    {name: 'Add-ons', number: 3, display: <AddonsStep />}, 
    {name: 'Summary', number: 4, display: <SummaryStep />}, 
];

export const confirmationStep = {name: 'Confirmation', number: 4, display: <ConfirmationStep />}

    export default steps

