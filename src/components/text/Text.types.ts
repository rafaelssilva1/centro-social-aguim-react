import { HTMLAttributes } from "react";

export enum TextTypes {
    Default = 'default',
    Medium = 'medium',
    Small = 'small',
}
export interface PropTypes extends HTMLAttributes<HTMLParagraphElement> {
    type?: TextTypes
}