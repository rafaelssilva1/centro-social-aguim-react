export enum IconPosition {
    Left,
    Right
}

export type PropTypes = {
	href: string,
    children: React.ReactNode,
	showIcon?: boolean,
	icon?: React.ReactNode,
	iconPosition?: IconPosition,
	showAsButton?: boolean,
};