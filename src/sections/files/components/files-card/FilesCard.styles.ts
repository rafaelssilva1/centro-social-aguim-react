import styled from 'styled-components';
import * as media from '../../../../theme/custom-media';

import ImageComponent from '../../../../components/image/Image';
import ExternalLink from '../../../../components/external-link/ExternalLink';

export const Container = styled.article`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	gap: var( --spacing-16 );

	flex: 0.25;

	${media.extraSmallMedia} {
		flex: 1;	
	}
`;

export const Image = styled( ImageComponent )`
	border-top-left-radius: var( --spacing-32 );
	border-top-right-radius: var( --spacing-32 );

	height: 37.8rem !important;
`;

export const Link = styled( ExternalLink )`
	width: 100%;

	justify-content: center;

	text-transform: unset;

	svg {
		max-width: 1.6rem;
		max-height: 1.6rem;
	}
`;
