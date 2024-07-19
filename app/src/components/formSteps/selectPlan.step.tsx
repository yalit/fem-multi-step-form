import {StepsNavigation} from "../stepsNavigation.tsx";
import {useState} from "react";
import {useCurrency, useData} from "../../store/hooks.ts";
import plansRepository from "../../repository/plans.repository.ts";
import {classNames} from "../../tools/style.ts";
import {BillingCycle, Plan} from "../../interfaces/plan.interface.ts";

export function SelectPlanStep() {
    const [plan, setPlan] = useState<Plan>(useData().plan)
    const [billingCycle, setBillingCycle] = useState<BillingCycle>(useData().billingCycle)
    const plans = plansRepository.all()
    const currency = useCurrency()

    const toggleBillingCycle = () => {
        console.log('toggleBillingCycle')
        setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')
    }

    return (
        <div>
            <div className="text-2xl font-bold text-blue-900 mb-2">Select Plan</div>
            <div className="text-gray-400 mb-4 md:mb-6">You have the option of monthly or yearly billing.</div>

            <div className="md:grid md:grid-cols-3 md:gap-3">
                {plans.map((p, index) => {
                    const planClassName = classNames(
                        "flex md:flex-col gap-4 md:gap-6 rounded border shadow p-4 mb-4 cursor-pointer transition-all duration-200",
                        p === plan ? 'border-blue-950 bg-blue-50' : 'border-gray-300 bg-white'
                    )
                    return (
                        <div key={index}
                             className={planClassName}
                             onClick={() => setPlan(p)}
                        >
                            <div>
                                <img src={p.icon} alt={p.name} className="w-11 h-11"/>
                            </div>
                            <div>
                                <div className="text-lg font-bold text-blue-900">{p.name}</div>
                                <div
                                    className="text-gray-400 text-sm">{currency}{p.price[currency][billingCycle]}/{billingCycle === 'monthly' ? 'mo' : 'yr'}</div>
                                {billingCycle === 'yearly' && <div className="text-blue-950 text-sm">2 months free</div>}
                            </div>
                        </div>
                    )
                })}
            </div>

            <div
                className="billing_cycle__toggle mt-5 bg-blue-50 shadow rounded flex items-center justify-center gap-8 p-4"
                onClick={toggleBillingCycle}
            >
                <label
                    className={classNames("font-medium duration-300", billingCycle === 'monthly' ? "text-blue-950" : 'text-gray-300')}
                >Monthly</label>
                <div className="switch relative inline-block w-[44px] h-[25px]">
                    <input type="checkbox" id="billing_cycle" className="peer opacity-0 w-0 h-0"
                           checked={billingCycle === 'yearly'} onChange={toggleBillingCycle}/>
                    <span
                        className="absolute inset-0 transition duration-300 cursor-pointer rounded-[25px] bg-blue-950 before:absolute before:content-[''] before:h-[20px] before:w-[20px] before:left-[3px] before:bottom-[2.5px] before:rounded-[50%] before:bg-white before:duration-300 peer-checked:before:translate-x-[18px]"/>
                </div>
                <label
                    className={classNames("font-medium", billingCycle === 'yearly' ? "text-blue-950" : 'text-gray-300')}>Yearly</label>
            </div>

            <StepsNavigation onSubmit={() => true} data={{plan, billingCycle}}/>
        </div>
    )
}
