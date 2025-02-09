import SanitizeHTMLContainer from '../../components/sanitize-html-container/SanitizeHTMLContainer';

import { Container } from './Map.styles';

import { PropTypes } from './Map.types';

const Map: React.FC<PropTypes> = ( { attributes, ...props } ) => {
	const { map } = attributes;

	return (
		<Container {...props}>
			<SanitizeHTMLContainer content={ map } columns='1' />
		</Container>
	);
};

export default Map;
