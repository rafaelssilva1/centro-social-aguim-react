import ImageComponent from "../../components/image/Image";
import { Container, Heading } from "./Image.styles";

import { PropTypes } from "./Image.types";

const Image: React.FC<PropTypes> = ( { attributes, ...props } ) => {
	const { title, image, imageFit = 'cover' } = attributes;
	const { url, alt, width, height} = image;

	return (
		<Container {...props}>
			{title ? <Heading level="2">{ title }</Heading> : null}
			<ImageComponent src={url} alt={alt} height={height} width={width} style={ { objectFit: imageFit } } />
		</Container>
	);
};

export default Image;
