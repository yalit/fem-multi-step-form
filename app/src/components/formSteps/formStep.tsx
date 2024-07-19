import {useCurrentStep} from "../../store/hooks.ts";

export default function FormStep() {
    const step = useCurrentStep()

    return (
        <div className="form_step absolute top-[5rem] left-[5%] w-[90%] bg-white p-7 rounded">
            {step.display}
        </div>
    )
}
