import styled, { css } from "styled-components";

import ImageComponent from "../../components/image/Image";
import ArrowNav from "../../components/icons/ArrowNav";
import LinkComponent from "../../components/link/Link";

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	gap: var(--spacing-32);

	padding: var(--spacing-32);
	padding: var(--spacing-60);
`;

export const InnerContainer = styled.div`
	position: relative;
`;

export const MediaContainer = styled.div`
	display: flex;
	justify-content: center;
`;

export const Image = styled(ImageComponent)`
	border-radius: var(--spacing-32);
`;

export const ArrowContainer = styled.div`
	position: absolute;
	left: 50%;
	transform: translateX( -50% );
`;

export const Arrow = styled(ArrowNav).withConfig( {
	shouldForwardProp: ( prop ) => ! [ 'rotate' ].includes( prop ),
} )<{rotate?: boolean}>`
	position: absolute;
	left: calc( 50% + 4rem );
	top: 50%;
	transform: translateY( -50% );

	cursor: pointer;

	${ ( { rotate } ) =>
		rotate &&
		css`
			left: calc( 50% - 12rem );
			transform: translateY( -50% ) rotate( 180deg );
		` }
`;

export const Link = styled(LinkComponent)`
	text-transform: unset;

	margin-top: 8rem;
`;

export const PreviousLink = styled(LinkComponent)`
	text-transform: unset;
	margin-top: var(--spacing-44);
`;

export const PreviousContainer = styled.div`
	display: flex;
	justify-content: center;
`;