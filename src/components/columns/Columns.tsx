import { componentMap, ComponentsPropTypes } from "../../pages/Page/blocks";

import { Container } from "./Columns.styles";

import { PropTypes } from "./Columns.types";

const Columns: React.FC<PropTypes> = ({attributes, ...props}) => {
    if(!attributes) return null;       

    return (
        <Container {...props}>
            {attributes.map((block: ComponentsPropTypes[], index: number) => {
                const content = block[0];
                const Component = content?.block ? componentMap[content.block] : null;

                return Component ? <Component key={index} attributes={content.attributes} /> : null;
            })}
        </Container>
    )
}

export default Columns;