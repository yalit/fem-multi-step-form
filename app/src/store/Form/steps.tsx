import { AddonsStep } from "../../components/formSteps/addons.step.tsx";
import { PersonalInfoStep } from "../../components/formSteps/personalInfo.step.tsx";
import { SelectPlanStep } from "../../components/formSteps/selectPlan.step.tsx";
import { SummaryStep } from "../../components/formSteps/summary.step.tsx";
import Step from "../../interfaces/step.interface.ts";

export const SELECTPLANNAME = 'Select plan';

const steps: Step[] = [
    {name: 'Your info', number: 1, display: <PersonalInfoStep />}, 
    {name: SELECTPLANNAME, number: 2, display: <SelectPlanStep />},
    {name: 'Add-ons', number: 3, display: <AddonsStep />}, 
    {name: 'Summary', number: 4, display: <SummaryStep />}, 
];

export default steps

