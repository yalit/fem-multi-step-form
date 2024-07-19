import {BillingCycle, Plan, PlanType} from "./plan.interface.ts";
import {plans} from "../store/Form/plans.ts";

export default interface FormData {
    planType: PlanType,
    name: string,
    email: string,
    phone: string,
    plan: Plan,
    billingCycle: BillingCycle
}

export const initialFormData: FormData = {
    planType: 'monthly',
    name: '',
    email: '',
    phone: '',
    plan: plans[0],
    billingCycle: 'monthly'
}

