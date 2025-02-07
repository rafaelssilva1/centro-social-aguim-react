import Heading from '../../../../components/heading/Heading';
import Text from '../../../../components/text/Text';
import { CardPropTypes } from '../../Cards.types';
import { Container, Image, InnerContainer, Overlay } from './Card.styles';

const Card: React.FC<CardPropTypes> = ( { title, description, media, link, ...props } ) => {
	const { url: mediaUrl, alt, height, width } = media;

	return (
		<Container href={`/${link}`} {...props}>
			<InnerContainer>
				<Image src={mediaUrl} alt={alt} height={height} width={width} />
				<Overlay />
			</InnerContainer>
			<InnerContainer>
				<Heading level="3">{ title }</Heading>
				<Text>{ description }</Text>
			</InnerContainer>
		</Container>
	);
};

export default Card;
