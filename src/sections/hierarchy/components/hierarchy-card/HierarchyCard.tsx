import Text from '../../../../components/text/Text';

import { Container, Heading } from './HierarchyCard.styles';

import { PropTypes } from './Hierarchy.types';

const HierarchyCard: React.FC<PropTypes> = ( { item, bgColor = 1 } ) => {
	const { position, name } = item;

	return (
		<Container bgColor={ bgColor }>
			<Heading level="4">{ position }</Heading>
			<Text>{ name }</Text>
		</Container>
	);
};

export default HierarchyCard;
