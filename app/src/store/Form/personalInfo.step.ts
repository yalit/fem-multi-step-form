import {InferType, object, string} from "yup";

export const personalInfoSchema = object({
    name: string().required("Name is required"),
    email: string().email("Invalid email").required("Email is required"),
    phone: string().required("Phone is required"),
})

export type PersonalInfo = InferType<typeof personalInfoSchema>
export type PersonalInfoErrors = {[k in keyof PersonalInfo]: string}
