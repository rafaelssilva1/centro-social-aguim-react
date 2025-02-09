import { Container, Image } from './Gallery.styles';

import { PropTypes } from './Gallery.types';

const Gallery: React.FC<PropTypes> = ( { attributes, ...props } ) => {
	const { data } = attributes;

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
};

export default Gallery;
