import {Swiper, SwiperSlide} from 'swiper/react';

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
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={16}
                    loop
                >
                    { data.map( ( item, index ) => {
                        const {title, description, media, link} = item;
                            
                        return (
                            <SwiperSlide key={index} style={{maxWidth: '30rem'}}>
                                <Card title={title} description={description} media={media} link={link} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
			</ServicesContainer>
		</Container>
	);
};

export default Cards;
