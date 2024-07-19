import Step from "../interfaces/step.interface"
import stepsRepository from "../repository/steps.repository"
import '../styles/menu.css'
import { MenuItem } from "./menuItem"

export function Menu() {
    const steps = stepsRepository.all()

    return(
        <nav id="menu" className="inset-0 w-screen h-[10rem] pt-[1.5rem] bg-cover">
            <div className="flex justify-center items-center gap-5">
                {steps.map((s:Step) => <MenuItem step={s} key={"s-"+s.name}/> )}
            </div>
        </nav>
    )
}
