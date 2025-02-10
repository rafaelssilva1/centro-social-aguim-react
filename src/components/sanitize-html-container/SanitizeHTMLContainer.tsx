import { Container } from "./SanitizeHTMLContainer.styles";
import { PropTypes } from "./SanitizeHTMLContainer.types";

const SanitizeHTMLContainer: React.FC<PropTypes> = ({content, renderAsParagraph = false, columns = '2', ...props}) => {
    if(!content) return null;

    return (
        <Container
            dangerouslySetInnerHTML={{__html: content}}
            as={renderAsParagraph ? 'p' : 'div'}
            columns={columns}
            {...props}
        />
    );
};

export default SanitizeHTMLContainer;