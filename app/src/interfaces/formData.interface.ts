export type PlanType = 'monthly' | 'yearly'

export default interface FormData {
    planType: PlanType,
    name: string,
    email: string,
    phone: string
}


export const initialFormData: FormData = {
    planType: 'monthly',
    name: '',
    email: '',
    phone: '',
}

