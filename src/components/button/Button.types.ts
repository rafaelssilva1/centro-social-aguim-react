import { ButtonHTMLAttributes } from "react";

import { IconPosition } from "../link/Link.types";

export type PropTypes = {
    icon?: React.ReactNode,
    iconPosition?: IconPosition,
} & ButtonHTMLAttributes<HTMLButtonElement>;