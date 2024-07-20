import {StepsNavigation} from "../stepsNavigation.tsx";
import {useActions, useCurrency, useData} from "../../store/hooks.ts";
import {classNames} from "../../tools/style.ts";
import {Currency} from "../../interfaces/price.interface.ts";
import FormData from "../../interfaces/formData.interface.ts";
import stepsRepository from "../../repository/steps.repository.tsx";
import {SELECTPLANNAME} from "../../store/Form/steps.tsx";

export function SummaryStep() {
    const datas: FormData = useData()
    const currency: Currency = useCurrency()
    const actions = useActions()

    const goToSelectPlan = () => {
        const selectPlanStep = stepsRepository.getByName(SELECTPLANNAME)
        if (selectPlanStep) {
            actions.goToStep(selectPlanStep)
        }
    }

    const total = datas.plan.price[currency][datas.billingCycle] + datas.addons.reduce((acc, addon) => acc + addon.price[currency][datas.billingCycle], 0)

    return (
        <>
            <div className="text-2xl font-bold text-blue-900 mb-2">Finishing up</div>
            <div className="text-gray-400 font-medium mb-4 md:mb-6">Double-check everything looks OK before confirming.</div>

            <div className={classNames(
                "plan flex justify-between items-center p-3 bg-gray-50",
                datas.addons.length > 0 ? 'border-b-1 border-gray-600 rounded-t' : 'rounded'
            )}>
                <div className="">
                    <div className="font-bold text-blue-950">{datas.plan.name} (<span
                        className="capitalize">{datas.billingCycle}</span>)
                    </div>
                    <div className="text-sm text-gray-500 underline cursor-pointer" onClick={goToSelectPlan}>Change
                    </div>
                </div>
                <div
                    className="font-bold text-blue-950 text-sm">{currency}{datas.plan.price[currency][datas.billingCycle]}/{{
                    'monthly': 'mo',
                    'yearly': 'yr'
                }[datas.billingCycle]}</div>
            </div>

            <div className={classNames(
                "addons p-3 bg-gray-50 rounded-b",
                datas.addons.length > 0 ? '' : 'hidden'
            )}>
                {datas.addons.map((addon, index) => (
                    <div key={index} className="addon flex justify-between items-center mb-2">
                        <div className="">
                            <div className="text-gray-500 text-sm font-medium">{addon.name}</div>
                        </div>
                        <div
                            className="font-bold text-sky-900 text-sm">{currency}{addon.price[currency][datas.billingCycle]}/{{
                            'monthly': 'mo',
                            'yearly': 'yr'
                        }[datas.billingCycle]}</div>
                    </div>
                ))}
            </div>

            <div className="total flex justify-between items-center px-3 mt-4">
                <div className="font-bold text-gray-400 text-sm">Total (per {{'monthly': 'month', 'yearly': 'year'}[datas.billingCycle]})</div>
                <div className="font-bold text-indigo-600 text-lg">{currency}{total}/{{
                    'monthly': 'mo',
                    'yearly': 'yr'
                }[datas.billingCycle]}</div>
            </div>

            <StepsNavigation onSubmit={() => true} data={{}}/>
        </>
    )
}
