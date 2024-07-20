import {useActions, useCurrentStep} from "../store/hooks.ts";
import Step from "../interfaces/step.interface.ts";
import stepsRepository from "../repository/steps.repository.tsx";
import FormData from "../interfaces/formData.interface.ts";

export function StepsNavigation({onSubmit, data}: {onSubmit: () => boolean, data: Partial<FormData>}){
    const step: Step = useCurrentStep() ?? stepsRepository.all()[0]
    const actions = useActions()

    const onNext = () => {
        if (onSubmit()) {
            actions.goToNextAndSave(data)
        }
    }
    return (
        <div className="steps_nagigation fixed md:absolute bottom-0 inset-x-0 p-4 md:p-7 md:pb-0 md:mt-8 flex justify-between items-center bg-white">
            {!stepsRepository.isFirst(step) &&
                <div className="text-gray-400 cursor-pointer"
                     onClick={() => actions.goToPrevious()}>Go Back</div>
            }
            <div className="flex-1"></div>
            {!stepsRepository.isLast(step) ?
                <div className="bg-blue-950 text-white py-2 px-4 rounded-md cursor-pointer"
                     onClick={onNext}>Next</div>
                :
                <div className="bg-blue-700 text-white py-2 px-4 rounded-md cursor-pointer"
                onClick={onNext}>Confirm</div>
            }
        </div>
    )
}
