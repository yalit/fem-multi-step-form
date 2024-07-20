import {Currency, Price} from "./price.interface.ts";

export type BillingCycle = 'monthly' | 'yearly'

export type Plan = { name: string, price: {[k in Currency]: Price}, icon: string }
