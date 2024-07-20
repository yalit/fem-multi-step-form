import { useMemo } from "react"
import Step from "../interfaces/step.interface"
import { useCurrentStep } from "../store/hooks"
import { classNames } from "../tools/style"

type MenuItemProps = {step: Step}

export function MenuItem({step}: MenuItemProps) {
    const currentStep = useCurrentStep()

    const menuItemNumberClass: string = useMemo<string>(() => classNames(
        "menu__item",
        "font-bold flex items-center text-sm justify-center w-8 h-8 border border-gray-50 rounded-[50%]",
        step.number === currentStep?.number ? "bg-cyan-50 text-blue-900" : "text-white"
    ), [step, currentStep])

    return (
        <div className="menu__item flex gap-4 mb-7 items-center">
            <div className={menuItemNumberClass}>
                {step.number}
            </div>
            <div className="menu__item__label hidden md:block md:w-auto">
                <div className="menu__item__label__title text-xs text-gray-400 uppercase font-medium">
                    Step {step.number}
                </div>
                <div className="menu__item__label__description text-xs text-white font-bold uppercase min-w-fit">
                    {step.name}
                </div>
            </div>
        </div>
    )
}
