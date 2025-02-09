import { AnchorHTMLAttributes } from "react";
import { IconPosition } from "../link/Link.types";

export type PropTypes = AnchorHTMLAttributes<HTMLAnchorElement> & {
    icon?: React.ReactNode,
    iconPosition?: IconPosition,
    showAsButton?: boolean;
};