import { MediaType } from "../../utils/types"

export type PropTypes = {
    attributes: {
        title: string,
        media: MediaType[],
        slug: string,
        previous_menu: {
            id: number | null,
            title: number | null,
            slug: string | null
        }
    }
}