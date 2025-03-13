import Card from './components/card/Card';

import { Heading } from '../hero/Hero.styles';
import { Container, ServicesContainer } from './Cards.styles';
import { PropTypes } from './Cards.types';

// @ts-expect-error ignore error
import 'swiper/css';

const Cards: React.FC<PropTypes> = ( { attributes, ...props } ) => {
	const { title, data } = attributes;

	return (
		<Container {...props}>
			<Heading level="2">{ title }</Heading>
			<ServicesContainer>
                { data.map( ( item, index ) => {
                    const {title, description, media, link} = item;
                        
                    return (
                        <Card key={index} title={title} description={description} media={media} link={link} />
                    )
                })}
			</ServicesContainer>
		</Container>
	);
};

export default Cards;
