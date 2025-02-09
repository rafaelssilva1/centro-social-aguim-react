import Heading from "../../components/heading/Heading";
import SanitizeHTMLContainer from "../../components/sanitize-html-container/SanitizeHTMLContainer";

import { Container } from "./Content.styles";

import { PropTypes } from "./Content.types";

const Content: React.FC<PropTypes> = ( { attributes, ...props } ) => {
	const { title, description, columns = '2' } = attributes;

	return (
		<Container {...props}>
			<Heading level="2">{ title }</Heading>
			<SanitizeHTMLContainer
				content={ description }
				columns={columns}
			/>
		</Container>
	);
};

export default Content;
