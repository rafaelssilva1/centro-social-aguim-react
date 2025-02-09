import { MediaType } from "../../utils/types"

export type SignUpFormType = {
    title: string,
    preview: MediaType,
    form: {
        value: string,
        label: string,
    }
}

export type PropTypes = {
    attributes: {
        title: string,
        description: string,
        data: SignUpFormType[]
    }
}