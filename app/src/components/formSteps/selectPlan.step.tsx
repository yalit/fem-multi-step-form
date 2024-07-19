import {StepsNavigation} from "../stepsNavigation.tsx";

export function SelectPlanStep() {
    return (
        <div>
            <div className="text-2xl font-bold text-blue-900">Select Plan</div>

            <StepsNavigation onSubmit={() => false} data={{}}/>
        </div>
    )
}
