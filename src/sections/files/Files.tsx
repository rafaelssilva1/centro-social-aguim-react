import SanitizeHTMLContainer from '../../components/sanitize-html-container/SanitizeHTMLContainer';
import FilesCard from './components/files-card/FilesCard';
import Heading from '../../components/heading/Heading';

import { Container, InnerContainer } from './Files.styles';

import { PropTypes } from './Files.types';

const Files: React.FC<PropTypes> = ( { attributes, ...props } ) => {
	const { title, description, data } = attributes;

	return (
		<Container { ...props }>
			<Heading level="2">{ title }</Heading>
			<SanitizeHTMLContainer content={ description } columns='1' />
			<InnerContainer>
                { data.map( ( item, index ) => (
                    <FilesCard key={ index } item={ item } />
                ) ) }
			</InnerContainer>
		</Container>
	);
};

export default Files;
