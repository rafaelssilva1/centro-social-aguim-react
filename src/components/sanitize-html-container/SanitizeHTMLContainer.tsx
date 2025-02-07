import { Container } from "./SanitizeHTMLContainer.styles";
import { PropTypes } from "./SanitizeHTMLContainer.types";

const SanitizeHTMLContainer: React.FC<PropTypes> = ({content, renderAsParagraph = false, ...props}) => {
    return (
        <Container
            dangerouslySetInnerHTML={{__html: content}}
            as={renderAsParagraph ? 'p' : 'div'}
            {...props}
        />
    );
};

export default SanitizeHTMLContainer;