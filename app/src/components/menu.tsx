import Step from "../interfaces/step.interface"
import stepsRepository from "../repository/steps.repository"
import '../styles/menu.css'
import { MenuItem } from "./menuItem"

export function Menu() {
    const steps = stepsRepository.all()

    return(
        <nav id="menu" className={
            "inset-0 w-screen md:w-auto h-[10rem] md:min-w-fit md:h-auto pt-[1.5rem] bg-cover bg-menuMobile md:bg-menuDesktop md:p-5 md:pr-10 md:rounded"
        }>
            <div className="flex justify-center items-center gap-5 md:block">
                {steps.map((s:Step) => <MenuItem step={s} key={"s-"+s.name}/> )}
            </div>
        </nav>
    )
}
