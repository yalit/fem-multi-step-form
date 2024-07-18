import { useActions, useCurrentStep } from "../store/hooks"
import { MAX_STEP, MIN_STEP } from "../store/store";

export function Sidebar() {
    const currentStep = useCurrentStep();
    const actions = useActions();

    return(
        <nav id="sidebar">
            <div>Current Step =  {currentStep}</div>
            {currentStep > MIN_STEP &&
                <button onClick={() => actions.goToPrevious()}>Previous Step</button>
            }
            {currentStep < MAX_STEP &&
                <button onClick={() => actions.goToNext()}>Next Step</button>
            }
        </nav>
    )
}
