import { Container, Image, Heading, Text, Overlay, Link } from './Card.styles';

import { ExpertiseCardType } from '../Expertise.types';

const Card: React.FC<ExpertiseCardType> = ( { title, description, media, link } ) => {
    const {url, alt, height, width} = media;

	return (
		<Container>
			<Link href={`/${link}`}>
                <Heading level="3">{ title }</Heading>
                <Text>{ description }</Text>
                <Image src={url} alt={alt} width={width} height={height} />
                <Overlay />
            </Link>
		</Container>
	);
};

export default Card;
