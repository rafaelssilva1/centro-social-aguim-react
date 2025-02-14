export type FormFieldType = {
    name: string,
    type: {
        id: string,
        label?: string
    },
    required: boolean,
    columns: {
        value: string,
        label?: string
    },
    validationRule?: string | null,
    min: string | number | null,
    max: string | number | null,
    options?: string[]
}

export type PropTypes = {
    attributes: {
        data: FormFieldType[]
    }
}