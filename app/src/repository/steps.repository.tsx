import Step from "../interfaces/step.interface";
import steps from "../store/Form/steps.tsx";

const stepsRepository = {
    all: (): Step[] => {return steps},
    getNext: (s: Step|null): Step|null => {return s ? steps[steps.indexOf(s) + 1] ?? null : null},
    getPrevious: (s: Step|null): Step|null => {return s ? steps[steps.indexOf(s) - 1] ?? null : null},
    isLast: (s: Step): boolean => {return steps.indexOf(s) === steps.length - 1},
    isFirst: (s: Step): boolean => {return steps.indexOf(s) === 0}
}

export default stepsRepository
