import { DateType, MediaType } from "../../utils/types"

export type PostTypes = {
    title: string,
    thumbnail: MediaType,
    date: DateType,
    link: string
}

export type AssemblyTypes = Omit<PostTypes, 'thumbnail'>

export type PropTypes = {
    attributes: {
        title: string,
        posts: PostTypes[],
        assemblies: AssemblyTypes[]
    }
}