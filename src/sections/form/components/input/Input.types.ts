import { UseFormRegisterReturn } from "react-hook-form"

export type PropTypes = {
    fieldName: string,
    type: string,
    isRequired: boolean,
    columns: string,
    error: boolean,
    validationRule?: string | null,
    min?: string | number,
    max?: string | number,
    registerCallback: UseFormRegisterReturn<string>
}