export type PlanType = 'monthly' | 'yearly'

export default interface FormData {
    planType: PlanType,
    firstName: string,
    lastName: string,
}


export const initialFormData: FormData = {
    planType: 'monthly',
    firstName: '',
    lastName: ''
}

