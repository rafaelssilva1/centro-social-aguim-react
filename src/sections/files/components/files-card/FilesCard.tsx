
import Heading from '../../../../components/heading/Heading';
import Download from '../../../../components/icons/Download';
import { IconPosition } from '../../../../components/link/Link.types';
import SanitizeHTMLContainer from '../../../../components/sanitize-html-container/SanitizeHTMLContainer';

import { Button, Container, Image, Link } from './FilesCard.styles';

import { PropTypes } from './FilesCard.types';

const FilesCard: React.FC<PropTypes> = ( { item, callback, ...props } ) => {
	const { title, description, preview, file, form } = item;

	return (
		<Container { ...props }>
			<Container>
				<Image src={preview.url} alt={preview.alt} height={preview.height} width={preview.width} />
				<Heading level="3">{ title }</Heading>
				{ description ? (
					<SanitizeHTMLContainer content={ description } columns='1' />
				) : null }
			</Container>
			{file ? <Link
				href={ file ? file.url : '' }
				target="_blank"
				showAsButton
				icon={ <Download /> }
				iconPosition={IconPosition.Left}
			>
				Descarregar
			</Link> : null}
			{form ? <Button onClick={() => {
				callback?.();
				window.scroll(0, 0);
			}}>
				Inscrever
			</Button> : null}
		</Container>
	);
};

export default FilesCard;
