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

export type FormData = {
    documentos?: { [key: string]: File[] }; 
    [key: string]: string | number | boolean | { [x: string]: string } | { [key: string]: File[] } | undefined;
}
