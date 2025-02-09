import Link from '../../../../components/link/Link';
import Heading from '../../../../components/heading/Heading';

import { Container, Time } from './Assembly.styles';

import { AssemblyTypes } from '../../Posts.types';
import { IconPosition } from '../../../../components/link/Link.types';
import Chrevon from '../../../../components/icons/Chrevon';

const Assembly: React.FC<AssemblyTypes> = ( { title, date: {parsedDate, datetime}, link, ...props } ) => {
	return (
		<Container {...props}>
			<Time dateTime={ datetime }>{ parsedDate }</Time>
			<Heading level="3">{ title }</Heading>
			<Link href={link} icon={<Chrevon />} iconPosition={IconPosition.Right}>Saiba mais</Link>
		</Container>
	);
};

export default Assembly;
