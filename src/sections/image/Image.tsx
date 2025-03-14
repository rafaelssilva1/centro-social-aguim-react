import Heading from "../../components/heading/Heading";
import ImageComponent from "../../components/image/Image";

import { Container } from "./Image.styles";

import { PropTypes } from "./Image.types";

const Image: React.FC<PropTypes> = ( { attributes, ...props } ) => {
	const { title, image, imageFit = 'cover', imageHeight } = attributes;
	const { url, alt, width, height} = image;

	return (
		<Container hasTitle={!!title} style={{height: imageHeight}} {...props}>
			{title ? <Heading level="2">{ title }</Heading> : null}
			<ImageComponent src={url} alt={alt} height={height} width={width} style={ { objectFit: imageFit } } />
		</Container>
	);
};

export default Image;
