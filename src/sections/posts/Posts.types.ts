import { DateType, MediaType } from "../../utils/types"

export type PostTypes = {
    title: string,
    excerpt: string,
    thumbnail: MediaType,
    date: DateType,
    link: string
}

export type AssemblyTypes = Omit<PostTypes, 'thumbnail'>

export type PropTypes = {
    block: string,
    attributes: {
        title: string,
        posts: PostTypes[],
        assemblies: AssemblyTypes[]
    }
}