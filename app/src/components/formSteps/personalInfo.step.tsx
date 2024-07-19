import FormData from "../../interfaces/formData.interface"
import { useData } from "../../store/hooks"
import {ValidationError} from "yup";
import {useState} from "react";
import Input from "../input.tsx";
import {StepsNavigation} from "../stepsNavigation.tsx";
import {PersonalInfo, PersonalInfoErrors, personalInfoSchema} from "../../store/Steps/personalInfo.step.ts";

export function PersonalInfoStep() {
    const stateDatas: FormData = useData()
    const [data, setData] = useState<PersonalInfo>(personalInfoSchema.cast(stateDatas))
    const [errors, setErrors] = useState<PersonalInfoErrors>({name: "", email: "", phone: "",})

    const onChange = (k: keyof PersonalInfo, value: string): void => {
        setData({...data, [k]: value})
        setErrors({...errors, [k]: ""})
    }
    const onSubmit = (): boolean => {
        try {
            personalInfoSchema.validateSync(data, {abortEarly: false})
        } catch (error) {
            if (error instanceof ValidationError) {
                const newErrors: PersonalInfoErrors = errors
                error.inner.forEach((e: ValidationError) => {
                    newErrors[e.path as keyof PersonalInfo] = e.message
                })
                setErrors((prev) => ({...prev, ...newErrors}))
            }
            return false
        }
        return true
    }

    return (
        <>
            <div className="text-2xl font-bold text-blue-950 mb-2">Personal Info</div>
            <div className="text-gray-400 mb-4">Please provide your name, email, address, and phone number.</div>

            <Input label={"Name"} value={data.name} error={errors.name} onChange={(name: string) => onChange("name", name)} placeholder={"e.g. Stephen King"} className="mb-3"/>
            <Input label={"Email Address"} value={data.email} error={errors.email} onChange={(email: string) => onChange("email", email)} placeholder={"e.g. stephenking@lorem.com"} className="mb-3"/>
            <Input label={"Phone Number"} value={data.phone} error={errors.phone} onChange={(phone: string) => onChange("phone", phone)} placeholder={"e.g. +1 234 567 890"} className="mb-3"/>

            <StepsNavigation onSubmit={onSubmit} data={data}/>
        </>
    )
}
