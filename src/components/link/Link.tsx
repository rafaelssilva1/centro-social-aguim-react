import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Chrevon from '../icons/Chrevon';

import { BaseLink } from './Link.styles';

import { IconPosition, PropTypes } from './Link.types';

const Link: React.FC<PropTypes> = ({
	href,
	children,
	showIcon = true,
	icon = <Chrevon />,
	iconPosition = 'right',
	showAsButton,
	...props
}) => {
	const { pathname } = useLocation();

	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<BaseLink to={href} showAsButton={showAsButton} {...props}>
			{showIcon && iconPosition === IconPosition.Left ? icon : null}
			<span>{children}</span>
			{showIcon && iconPosition === IconPosition.Right ? icon : null}
		</BaseLink>
	);
};

export default Link;
