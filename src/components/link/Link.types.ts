import { AnchorHTMLAttributes } from "react";

export enum IconPosition {
    Left,
    Right
}

export type PropTypes = {
    children: React.ReactNode,
	showIcon?: boolean,
	icon?: React.ReactNode,
	iconPosition?: IconPosition,
	showAsButton?: boolean,
} & AnchorHTMLAttributes<HTMLAnchorElement>;