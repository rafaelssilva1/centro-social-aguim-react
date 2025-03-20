import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from 'swiper';
import { Navigation } from "swiper/modules";
import { Zoom } from 'swiper/modules';

import Heading from "../../components/heading/Heading";
import Text from "../../components/text/Text";
import ArrowSmall from "../../components/icons/ArrowSmall";

import { Container, InnerContainer, MediaContainer, Image, ArrowContainer, Arrow, PreviousLink, PreviousContainer } from "./Menu.styles";

// @ts-expect-error ignore error
import 'swiper/css';
// @ts-expect-error ignore error
import 'swiper/css/navigation';
// @ts-expect-error ignore error
import 'swiper/css/zoom';

import { PropTypes } from "./Menu.types";
import { IconPosition } from "../../components/link/Link.types";

const Menu: React.FC<PropTypes> = ({attributes, ...props}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const swiperRef = useRef<SwiperType>();

    const {title, media, previous_menu} = attributes;

    return (
        <Container {...props}>
			<Heading level="2">{ title }</Heading>
			<InnerContainer>
				<MediaContainer>
                    <Swiper
                        slidesPerView={'auto'}
                        centeredSlides
                        pagination={{ clickable: true }}
                        modules={[Navigation, Zoom]}
                        onActiveIndexChange={(slide) => setCurrentSlide(slide.activeIndex)}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        zoom
                    >
                        { media.map( ( img, index ) => {
                            const {url, alt, height, width} = img;

                            return (
                                <SwiperSlide key={index} style={{maxWidth: '105.2rem'}}>
                                    <div className="swiper-zoom-container">
                                        <Image src={url} alt={alt} height={height} width={width} />
                                    </div>
                                </SwiperSlide>
                            )
                        } ) }
                    </Swiper>
                </MediaContainer>
			</InnerContainer>
			<InnerContainer>
				<ArrowContainer>
						{currentSlide !== 0 ?
                        <span onClick={() => swiperRef.current?.slidePrev()}>
                            <Arrow rotate />
                        </span> : null}
					    <Text>página {currentSlide + 1}</Text>
                        {currentSlide !== media.length - 1 ?
                        <span onClick={() => swiperRef.current?.slideNext()}>
                            <Arrow />
                        </span> : null }
				</ArrowContainer>
			</InnerContainer>
            {
                previous_menu.id ? 
                <PreviousContainer>
                    <PreviousLink
                        href={`/${previous_menu.slug}`}
                        showAsButton
                        icon={<ArrowSmall />}
                        iconPosition={IconPosition.Left}
                    >
                        {previous_menu.title}
                    </PreviousLink>
                </PreviousContainer> : 
                null
            }
		</Container>
    )
}

export default Menu;