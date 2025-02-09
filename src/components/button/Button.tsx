import { BaseButton } from "./Button.styles";

import { PropTypes } from "./Button.types";
import { IconPosition } from "../link/Link.types";

const Button: React.FC<PropTypes> = ({children, icon, iconPosition, ...props}) => {
    return (
        <BaseButton {...props}>
            { !!icon && iconPosition === IconPosition.Left ? icon : null }
            <span>{ children }</span>
            { !!icon && iconPosition === IconPosition.Right ? icon : null }
        </BaseButton>
    );
};

export default Button;