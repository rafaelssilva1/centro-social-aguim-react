import ExternalIcon from "../icons/ExternalIcon";
import { BaseLink } from "./ExternalLink.styles";
import { PropTypes } from "./ExternalLink.types";

const ExternalLink: React.FC<PropTypes> = ({href, children, showIcon = true, target = '_blank', ...props}) => {
    if(!href) {
        return null;
    }

    return (
        <BaseLink href={href} target={target} {...props}>
            <span>{children}</span>
            {showIcon ? <ExternalIcon /> : null}
        </BaseLink>
    )
};

export default ExternalLink;