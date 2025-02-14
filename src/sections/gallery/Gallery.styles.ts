import styled from 'styled-components';
import * as media from '../../theme/custom-media';

import ImageComponent from '../../components/image/Image';

export const Container = styled.section`
	display: grid;
	grid-template-columns: repeat( 3, 1fr );
	gap: var(--spacing-16);

    padding: var(--spacing-32);

	border-radius: var(--spacing-32);

	width: 100%;

	${media.extraSmallMedia} {
		grid-template-columns: repeat( 2, 1fr );
	}
`;

export const Image = styled( ImageComponent )`
	border-radius: var(--spacing-16);
	height: 100%;
	aspect-ratio: 1 / 1;

	&:nth-of-type( 3n ) {
		grid-row: span 2;

		${media.extraSmallMedia} {
			grid-row: span 1;
		}
	}
	&:nth-of-type( 9n ) {
		grid-row: span 1;
	}

	${media.extraSmallMedia} {
		max-height: 16rem;
		border-radius: var(--spacing-8);

		&:nth-of-type(n+5) {
			display: none;
		}
	}
`;
