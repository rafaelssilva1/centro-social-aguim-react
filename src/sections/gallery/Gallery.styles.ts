import styled from 'styled-components';

import ImageComponent from '../../components/image/Image';

export const Container = styled.section`
	display: grid;
	grid-template-columns: repeat( 3, 1fr );
	gap: var(--spacing-16);

    padding: var(--spacing-32);

	border-radius: var(--spacing-32);

	width: 100%;
`;

export const Image = styled( ImageComponent )`
	border-radius: var(--spacing-32);
	height: 100%;
	aspect-ratio: 1 / 1;

	&:nth-of-type( 3n ) {
		grid-row: span 2;
	}
`;
