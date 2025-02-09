import { Container, SanitizeHTMLContainer, Heading } from "./Hero.styles";

import { PropTypes } from "./Hero.types";

const Hero: React.FC<PropTypes> = ({attributes, ...props}) => {
    const { title, description } = attributes;

    return (
        <Container {...props}>
            <Heading level="1">{title}</Heading>
            {description ? <SanitizeHTMLContainer content={description} renderAsParagraph columns="1" /> : null}
        </Container>
    )
}

export default Hero;