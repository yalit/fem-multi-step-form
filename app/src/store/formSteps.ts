import Step from "../interfaces/step.interface";

export const initialStep: Step = {name: "Your info", previous: null, next: null}
const selectPlanStep: Step = {name: "Select Plan", previous: initialStep, next: null}
const addOnsStep: Step = {name: "Add-ons", previous: selectPlanStep, next: null}
const summaryStep: Step = {name: "Summary", previous: addOnsStep, next: null}

initialStep.next = selectPlanStep
selectPlanStep.next = addOnsStep
addOnsStep.next = summaryStep
