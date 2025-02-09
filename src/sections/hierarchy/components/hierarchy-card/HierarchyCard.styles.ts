import styled, { css } from 'styled-components';

import HeadingComponent from '../../../../components/heading/Heading';

export const Container = styled( 'article' ).withConfig( {
	shouldForwardProp: ( prop ) => ! [ 'bgColor' ].includes( prop ),
} )<{bgColor: number}>`
	display: flex;
	flex-direction: column;
	gap: var( --spacing-32 );

	padding: var( --spacing-32 );

	border-top-left-radius: var( --spacing-32 );
	border-top-right-radius: var( --spacing-32 );

	border: 0.1rem solid var( --color-text );

	height: 20rem;

	${ ( { bgColor } ) =>
		bgColor === 1 &&
		css`
			background-color: var( --color-secondary );
		` };
	${ ( { bgColor } ) =>
		bgColor === 2 &&
		css`
			background-color: var( --color-primary );
		` };
	${ ( { bgColor } ) =>
		bgColor === 3 &&
		css`
			background-color: var( --color-primary-30 );
		` };
`;

export const Heading = styled( HeadingComponent )`
	font-size: 3.6rem;
`;
