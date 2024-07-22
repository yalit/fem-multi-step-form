import {ReactElement} from "react";
import {classNames} from "../tools/style.ts";

type InputProps = {
    id: string,
    label: string | ReactElement;
    value: string;
    error?: string;
    onChange: (value: string) => void;
    placeholder: string;
    className?: string;
}

export default function Input({id, label, value, onChange, placeholder, className = "", error = ''}: InputProps) {
    const inputClassName = classNames(
        "mt-1 p-2 w-full border border-gray-300 rounded-md pl-4 text-sm",
        error ? "border-red-500" : "border-gray-300"
    )
    return (
        <div className={className}>
            <div className="flex justify-between items-center">
                <label htmlFor="name" className="block text-sm font-medium text-blue-950">{label}</label>
                {error && <div className="text-red-500 font-bold text-xs">{error}</div>}
            </div>
            <input
                type="text"
                id={id}
                name={id}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={inputClassName}
            />
        </div>

    )
}
