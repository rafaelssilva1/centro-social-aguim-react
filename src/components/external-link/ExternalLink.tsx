import ExternalIcon from "../icons/ExternalIcon";

import { BaseLink } from "./ExternalLink.styles";

import { IconPosition } from "../link/Link.types";
import { PropTypes } from "./ExternalLink.types";

const ExternalLink: React.FC<PropTypes> = ({href, children, icon, iconPosition = <ExternalIcon />, showAsButton, target = '_blank', ...props}) => {
    if(!href) {
        return null;
    }

    return (
        <BaseLink href={href} target={target} showAsButton={showAsButton} {...props}>
            { !!icon && iconPosition === IconPosition.Left ? icon : null }
            <span>{ children }</span>
            { !!icon && iconPosition === IconPosition.Right ? icon : null }
        </BaseLink>
    )
};

export default ExternalLink;