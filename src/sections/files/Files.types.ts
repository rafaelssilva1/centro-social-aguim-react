import { MediaType } from "../../utils/types";

export type FileType = {
    title: string,
    description: string,
    file: {
        url: string,
    },
    preview: MediaType
}

export type PropTypes = {
    attributes: {
        title: string,
        description?: string,
        data: FileType[]
    }
}