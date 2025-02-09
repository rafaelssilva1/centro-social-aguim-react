import Heading from '../../components/heading/Heading';
import SanitizeHTMLContainer from '../../components/sanitize-html-container/SanitizeHTMLContainer';
import FilesCard from '../files/components/files-card/FilesCard';

import { Container, InnerContainer } from './SignUpForms.styles';

import { PropTypes } from './SignUpForms.types';

const SignUpForms: React.FC<PropTypes> = ( { attributes, ...props } ) => {
	const { title, description, data } = attributes;

	return (
		<Container { ...props }>
                <Heading level="2">{ title }</Heading>
				<SanitizeHTMLContainer content={ description } />
			<InnerContainer>
				{data.map((item, index) => <FilesCard item={item} key={index} />)}
			</InnerContainer>
		</Container>
	);
};

export default SignUpForms;
