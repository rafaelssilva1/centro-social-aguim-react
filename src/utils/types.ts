export type MediaType = {
    url: string,
    alt: string,
    width: number,
    height: number
}

export type LinkType = string;

export type DateType = {
    parsedDate: string,
    datetime: string
}

export enum AllowedMenus {
    Footer = 'footer',
    Header = 'header'
}