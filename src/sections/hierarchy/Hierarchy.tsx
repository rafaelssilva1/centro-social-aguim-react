import { Swiper, SwiperSlide } from 'swiper/react';

import Heading from '../../components/heading/Heading';
import SanitizeHTMLContainer from '../../components/sanitize-html-container/SanitizeHTMLContainer';
import HierarchyCard from './components/hierarchy-card/HierarchyCard';

import { Container, InnerContainer } from './Hierarchy.styles';

import { PropTypes } from './Hierarchy.types';

// @ts-expect-error ignore error
import 'swiper/css';

const Hierarchy: React.FC<PropTypes> = ( { attributes, ...props } ) => {
	const { title, extras, data } = attributes;

	return (
		<Container {...props}>
			<Heading level="2">{ title.label }</Heading>
			<InnerContainer>
				<Swiper
                    slidesPerView={'auto'}
                    spaceBetween={16}
                    style={{width: '100%'}}
                >
                    { data.map( ( item, index ) => (
                        <SwiperSlide key={ index } style={{maxWidth: '40rem'}}>
                            <HierarchyCard
                                item={ item }
                                bgColor={ title.id }
                            />
                        </SwiperSlide>
                    ) ) }
                </Swiper>
			</InnerContainer>
			{ extras ? (
				<>
					<Heading level="3">Suplentes</Heading>
					<SanitizeHTMLContainer content={ extras } columns='1' />
				</>
			) : null }
		</Container>
	);
};

export default Hierarchy;
