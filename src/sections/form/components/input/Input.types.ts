import { UseFormRegisterReturn } from "react-hook-form"

export type PropTypes = {
    fieldName: string,
    valueName: string,
    type: string,
    isRequired: boolean,
    columns: string,
    error: boolean,
    validationRule?: string | null,
    min?: string | number,
    max?: string | number,
    options?: string[],
    registerCallback: UseFormRegisterReturn<string>
}