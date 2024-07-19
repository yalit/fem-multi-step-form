export type PlanType = 'monthly' | 'yearly'
export type Price = { monthly: number, yearly: number }
export type BillingCycle = keyof Price

export type Plan = { name: string, price: Price, currency: string, icon: string }
