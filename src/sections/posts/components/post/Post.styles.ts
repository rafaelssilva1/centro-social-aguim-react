import styled from 'styled-components';

import ImageComponent from '../../../../components/image/Image';

import * as media from '../../../../theme/custom-media';

export const Container = styled.article`
	display: flex;
	gap: var(--spacing-16);

	height: 22rem;

	&:first-of-type {
		grid-row: span 2;
		height: 100%;

		${media.lteSmallMedia} {
			grid-row: span 1;
		}
		
		${media.mediumMedia} {
			grid-column: span 2;
			grid-row: unset;
		}

		${media.extraSmallMedia} {
			height: unset;
		}
	}

	${media.extraSmallMedia} {
		display: flex;
		flex-direction: column;
		height: unset;
	}
`;

export const InnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: var(--spacing-16);
	
	padding-block: var(--spacing-16);
`;

export const Image = styled( ImageComponent )`
	border-radius: var(--spacing-32);

	max-height: 46.2rem;
    max-width: 46.2rem;
    aspect-ratio: 1 / 1;

	${media.extraSmallMedia} {
		aspect-ratio: unset;
		max-width: 100%;
		height: 16rem;
	}
`;

export const Time = styled.time`
	font-size: 2rem;
`;
