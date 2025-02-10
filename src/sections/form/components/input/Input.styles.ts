import styled, { css } from 'styled-components';
import typography from '../../../../theme/typography.styles';

import * as media from '../../../../theme/custom-media';

export const InputSpan = styled('span').withConfig( {
	shouldForwardProp: ( prop ) => ! [ 'columns' ].includes( prop ),
} )<{columns?: string}>`
	color: var( --color-text );

	${ ( { columns } ) =>
		columns && columns !== '1' &&
		css`
			width: calc( ${ Number(columns) * 100 }% - var( --spacing-16 ) );

			${media.extraSmallMedia} {
				width: 100%;
			}
		` }
`;

export const InputLabel = styled( 'label' ).withConfig( {
	shouldForwardProp: ( prop ) => ! [ 'columns' ].includes( prop ),
} )<{columns?: string}>`
	width: 100%;

	display: flex;
	flex-direction: column;
	gap: var( --spacing-4 );

	${typography.p.medium}

	${ ( { columns } ) =>
		columns && columns !== '1' &&
		css`
			width: calc( ${ Number(columns) * 100 }% - var( --spacing-16 ) );

			${media.extraSmallMedia} {
				width: 100%;
			}
		` }
`;

export const StyledInput = styled('input').withConfig( {
	shouldForwardProp: ( prop ) => ! [ 'error' ].includes( prop ),
} )<{error?: boolean}>`
	border-radius: var( --spacing-32 );
	border: 0.1rem solid var( --color-text );

	padding: var( --spacing-12 ) var( --spacing-32 );

	${ ( { error } ) =>
		error &&
		css`
			border-color: var(--color-required);
	` }
`;

export const TextArea = styled('textarea').withConfig( {
	shouldForwardProp: ( prop ) => ! [ 'error' ].includes( prop ),
} )<{error?: boolean}>`
	border-radius: var( --spacing-32 );
	border: 0.1rem solid var( --color-text );
	width: 100%;

	padding: var( --spacing-12 ) var( --spacing-32 );

	${ ( { error } ) =>
		error &&
		css`
			border-color: var(--color-required);
	` }
`;
