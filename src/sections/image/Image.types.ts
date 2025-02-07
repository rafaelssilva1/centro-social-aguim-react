export type PropTypes = {
    block: string,
    attributes: {
        title?: string,
        image: {
            url: string,
            alt: string,
            width: number,
            height: number
        },
        imageFit: 'cover' | 'contain'
    }
}