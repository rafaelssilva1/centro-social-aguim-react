import { LinkType, MediaType } from "../../utils/types"

export type CardPropTypes = {
    title: string,
    description: string,
    media: MediaType,
    link: LinkType
}

export type PropTypes = {
    block: string,
    attributes: {
        title: string,
        data: CardPropTypes[]
    }
}