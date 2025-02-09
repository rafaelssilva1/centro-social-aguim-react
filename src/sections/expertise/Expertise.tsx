import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import Card from "./components/Card";

import { Heading, SanitizeHTMLContainer } from "../hero/Hero.styles";
import { Container, ServicesContainer } from "./Expertise.styles";

// @ts-expect-error
import 'swiper/css';
// @ts-expect-error
import "swiper/css/autoplay";

import { PropTypes } from "./Expertise.types";

const Expertise: React.FC<PropTypes> = ({attributes, ...props}) => {
    const {title, description, data} = attributes;

    return (
		<Container {...props}>
			<Heading level="2">{ title }</Heading>
			<SanitizeHTMLContainer content={ description } columns="1" />
			<ServicesContainer>
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
                >
                    {data.map( ( item, index ) => {
                        const {title, description, link, media} = item;

                        return (
                            <SwiperSlide key={index} style={{maxWidth: '40rem'}}>
                                <Card title={title} description={description} media={media} link={link} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
			</ServicesContainer>
		</Container>
    )
}

export default Expertise;