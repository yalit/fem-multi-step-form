import Step from "../interfaces/step.interface"

type FormStepProps = {step: Step}
export default function FormStep({step}: FormStepProps) {
    return (
        <div className="form_step">
            {step.name}
            </div>
    )
}
