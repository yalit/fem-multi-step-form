import { useActions, useCurrentStep } from "../store/hooks"

export function Sidebar() {
    const step = useCurrentStep();
    const actions = useActions();

    return(
        <nav id="sidebar">
            <div>Current Step =  {step.name}</div>
            {step.previous &&
                <button onClick={() => actions.goToPrevious()}>Previous Step</button>
            }
            {step.next &&
                <button onClick={() => actions.goToNext()}>Next Step</button>
            }
        </nav>
    )
}
