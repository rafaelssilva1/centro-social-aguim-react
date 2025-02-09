import styled, { css } from 'styled-components';
import * as media from '../../theme/custom-media';

import ImageComponent from '../../components/image/Image';

export const Container = styled( 'section' ).withConfig( {
	shouldForwardProp: ( prop ) => ! [ 'invert' ].includes( prop ),
} )<{invert?: boolean}>`
	display: flex;
	gap: var(--spacing-32);

	padding: var(--spacing-32);

	${media.extraSmallMedia} {
		flex-direction: column;
	}

	${ ( { invert } ) =>
		invert &&
		css`
			flex-direction: row-reverse;
		` }
`;

export const Image = styled(ImageComponent).withConfig( {
	shouldForwardProp: ( prop ) => ! [ 'splitImgWidth' ].includes( prop ),
} )<{splitImgWidth?: boolean}>`
	border-radius: var(--spacing-32);

	${ ( { splitImgWidth } ) =>
		splitImgWidth &&
		css`
			width: 50%;
		` }
`;

export const InnerContainer = styled.div`
	flex: 1;
`;

export const MediaContainer = styled.div`
	flex: 1;

	display: flex;
	gap: var(--spacing-16);
`;