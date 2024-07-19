import {useCurrentStep} from "../../store/hooks.ts";

export default function FormStep() {
    const step = useCurrentStep()

    return (
        <div className="form_step absolute md:relative top-[5rem] left-[5%] md:inset-0 w-[90%] md:w-full bg-white p-7 rounded pb-20">
            {step?.display}
        </div>
    )
}
