import { MediaType } from "../../utils/types"

export type PropTypes = {
    attributes: {
        title?: string,
        description: string,
        image1: MediaType,
        image2?: MediaType,
        invert: boolean
    }
}