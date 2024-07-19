import {useCurrency, useData} from "../../store/hooks.ts";
import {Addon} from "../../interfaces/addon.interface.ts";
import {useState} from "react";
import {addons} from "../../store/Form/addons.ts";
import {classNames} from "../../tools/style.ts";
import {StepsNavigation} from "../stepsNavigation.tsx";
import {Currency} from "../../interfaces/price.interface.ts";

export function AddonsStep() {
    const datas = useData()
    const currency: Currency = useCurrency()
    const [stepAddons, setStepAddons] = useState<Addon[]>(datas.addons)

    const toggleAddon = (addon: Addon) => {
        if (stepAddons.includes(addon)) {
            setStepAddons(stepAddons.filter(a => a !== addon))
        } else {
            setStepAddons([...stepAddons, addon])
        }
    }
    return (
        <>
            <div className="text-2xl font-bold text-blue-900 mb-2">Pick Addons</div>
            <div className="text-gray-400 mb-4 md:mb-6">Add-ons help enhance your gaming experience.</div>

            {addons.map((addon, index) => {
                return (
                    <div key={index}
                         className={classNames(
                             "flex gap-4 p-4 items-center cursor-pointer justify-between rounded border mb-3",
                             stepAddons.includes(addon) ? 'border-blue-950 bg-blue-50' : 'border-gray-400 bg-white'
                         )}
                         onClick={() => toggleAddon(addon)}>
                        <div className="flex items-center gap-4">
                            <input type="checkbox"
                                   id={addon.name}
                                   className="rounded border border-gray-400 w-4 h-4 cursor-pointer transition-all duration-200"
                                   checked={stepAddons.includes(addon)}
                                   onChange={() => console.log()}
                            />
                            <div className="text-sm">
                                <div className="text-lg font-medium text-blue-950">{addon.name}</div>
                                <div className="text-gray-400">{addon.subtitle}</div>
                            </div>
                        </div>
                        <div className="text-sm font-medium text-indigo-800">+{currency}{addon.price[currency][datas.billingCycle]}/{{'monthly': 'mo', 'yearly': 'yr'}[datas.billingCycle]}</div>
                    </div>
                )
            })}
            <div className="flex p-4 justify-end mt-2 font-medium text-sm text-indigo-800">+{currency}{stepAddons.reduce((t: number, a: Addon) => t + a.price[currency][datas.billingCycle], 0)}/{{'monthly': 'mo', 'yearly': 'yr'}[datas.billingCycle]} billed</div>

            <StepsNavigation onSubmit={() => true} data={{addons: stepAddons}}/>
        </>
    )
}
