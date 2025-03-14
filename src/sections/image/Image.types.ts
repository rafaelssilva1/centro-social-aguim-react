export type PropTypes = {
    attributes: {
        title?: string,
        image: {
            url: string,
            alt: string,
            width: number,
            height: number
        },
        imageFit: 'cover' | 'contain',
        imageHeight: string
    }
}