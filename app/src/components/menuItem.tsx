import { useMemo } from "react"
import Step from "../interfaces/step.interface"
import { useCurrentStep } from "../store/hooks"
import { classNames } from "../tools/style"

type MenuItemProps = {step: Step}

export function MenuItem({step}: MenuItemProps) {
    const currentStep = useCurrentStep()

    const menuItemClass: string = useMemo<string>(() => classNames(
        "menu__item",
        "font-bold flex items-center justify-center w-8 h-8 border border-gray-50 rounded-[50%]",
        step === currentStep ? "bg-cyan-50 text-blue-900" : "text-white"
    ), [currentStep])

    return (
        <div className="menu__item">
            <div className={menuItemClass}>
                {step.number}
            </div>
        </div>
    )
}
