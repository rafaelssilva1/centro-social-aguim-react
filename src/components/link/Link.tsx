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
	return (
		<BaseLink to={href} showAsButton={ showAsButton } { ...props }>
			{ showIcon && iconPosition === IconPosition.Left ? icon : null }
			<span>{ children }</span>
			{ showIcon && iconPosition === IconPosition.Right ? icon : null }
		</BaseLink>
	);
};

export default Link;
