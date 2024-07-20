import {Plan, BillingCycle} from "./plan.interface.ts";
import {plans} from "../store/Form/plans.ts";
import {Addon} from "./addon.interface.ts";

export default interface FormData {
    billingCycle: BillingCycle,
    name: string,
    email: string,
    phone: string,
    plan: Plan,
    addons: Addon[]
}

export const initialFormData: FormData = {
    billingCycle: 'monthly',
    name: '',
    email: '',
    phone: '',
    plan: plans[0],
    addons: []
}

