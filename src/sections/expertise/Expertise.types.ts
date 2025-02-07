import { MediaType } from "../../utils/types"

export type ExpertiseCardType = {
        title: string,
        description: string,
        media: MediaType,
        link: string
}

export type PropTypes = {
    attributes: {
        title: string,
        description: string,
        data: ExpertiseCardType[]
    }
}