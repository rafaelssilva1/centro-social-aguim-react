
import Heading from '../../components/heading/Heading';
import SanitizeHTMLContainer from '../../components/sanitize-html-container/SanitizeHTMLContainer';

import { Container, Image, InnerContainer, MediaContainer } from './TextImages.styles';

import { PropTypes } from './TextImages.types';

const TextImages: React.FC<PropTypes> = ( { attributes, ...props } ) => {
	const { title, description, image1, image2, invert } = attributes;

	return (
		<Container invert={invert} {...props}>
			<InnerContainer>
                <Heading level="2">{ title }</Heading>
                <SanitizeHTMLContainer content={description} columns='1' />
			</InnerContainer>
			<MediaContainer>
                { image1 ?
                    <Image src={image1.url} alt={image1.alt} width={image1.width} height={image1.height} splitImgWidth={!!image2} />
                : null }
                { image2 ?
                    <Image src={image2.url} alt={image2.alt} width={image2.width} height={image2.height} splitImgWidth={!!image2} />
                : null }
            </MediaContainer>
		</Container>
	);
};

export default TextImages;
