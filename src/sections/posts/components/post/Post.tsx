import Link from '../../../../components/link/Link';

import { Container, Image, InnerContainer, Time } from './Post.styles';
import { Heading, SanitizeHTMLContainer } from '../../../hero/Hero.styles';

import { PropTypes } from './Post.types';
import Chrevon from '../../../../components/icons/Chrevon';
import { IconPosition } from '../../../../components/link/Link.types';

const Post: React.FC<PropTypes> = ( { title, excerpt, thumbnail: {url, alt, width, height}, date: {parsedDate, datetime}, link, isFirst, ...props } ) => {
	return (
		<Container {...props}>
			<Image src={url} alt={alt} width={width} height={height} />
			<InnerContainer>
				<Time dateTime={ datetime }>{ parsedDate }</Time>
				<Heading level="3">{ title }</Heading>
				<SanitizeHTMLContainer content={ excerpt } columns='1' />
				<Link href={link} showAsButton={!!isFirst} icon={!isFirst && <Chrevon />} iconPosition={!isFirst ? IconPosition.Right : undefined}>Saiba mais</Link>
			</InnerContainer>
		</Container>
	);
};

export default Post;
