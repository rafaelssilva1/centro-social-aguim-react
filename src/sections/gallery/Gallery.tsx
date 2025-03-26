import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { Container, Image } from './Gallery.styles';

import { PropTypes } from './Gallery.types';

// @ts-expect-error ignore error
import 'swiper/css';
// @ts-expect-error ignore error
import "swiper/css/autoplay";

const Gallery: React.FC<PropTypes> = ( { attributes, ...props } ) => {
	const { data, variant} = attributes;

	switch (variant?.id) {
		case 2:
			return (
				<Swiper
                    slidesPerView={'auto'}
                    spaceBetween={16}
                    loop
                    autoplay={{
                        delay: 400,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    speed={4000}
                    modules={[Autoplay]}
					{ ...props }
                >
                    { data.map( ( item, index ) => {
						const {url, alt, height, width} = item;
		
						return (
							<SwiperSlide key={index} style={{maxWidth: '40rem'}}>
								<Image src={url} alt={alt} height={height} width={width} key={index} />
							</SwiperSlide>
						)
					} ) }
                </Swiper>
			);
		default:
			return (
				<Container { ...props }>
					{ data.map( ( item, index ) => {
						const {url, alt, height, width} = item;
		
						return (
							<Image src={url} alt={alt} height={height} width={width} key={index} />
						)
					} ) }
				</Container>
			);
	}
};

export default Gallery;
