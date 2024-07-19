import {Currency, Price} from "./price.interface.ts";

export type PlanType = 'monthly' | 'yearly'
export type BillingCycle = keyof Price

export type Plan = { name: string, price: {[k in Currency]: Price}, icon: string }
