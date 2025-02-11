import { componentMap, ComponentsPropTypes } from "../../pages/Page/blocks";

import { Container, InnerContainer } from "./Columns.styles";

import { PropTypes } from "./Columns.types";

const Columns: React.FC<PropTypes> = ({attributes, ...props}) => {
    if(!attributes) return null;       

    return (
        <Container {...props}>
            {attributes.map((column: ComponentsPropTypes[], index: number) => {
                return (
                    <InnerContainer key={index}>
                        {
                            column.map((block, j) => {
                                const Component = block?.block ? componentMap[block.block] : null;
            
                                return Component ? <Component key={j} attributes={block.attributes} /> : null;
                            })
                        }
                    </InnerContainer>
                )
            })}
        </Container>
    )
}

export default Columns;