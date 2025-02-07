import styled from 'styled-components';

import ImageComponent from '../../../components/image/Image';
import HeadingComponent from '../../../components/heading/Heading';
import TextComponent from '../../../components/text/Text';
import LinkComponent from '../../../components/link/Link';

export const Container = styled.div`
	position: relative;

	height: 32rem;
	width: 100%;

	padding: var(--spacing-32) var(--spacing-16);

	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	gap: var(--spacing-16);

	border-radius: var(--spacing-32);
	overflow: hidden;

	flex-shrink: 0;
`;

export const Link = styled(LinkComponent)`
	text-transform: unset;
`;

export const Image = styled( ImageComponent )`
	position: absolute;
	inset: 0;

	z-index: var(--index-default);
`;

export const Overlay = styled.span`
	position: absolute;
	inset: 0;

	background: linear-gradient(
		rgba( 255, 255, 255, 0.2 ) 0%,
		rgba( 0, 0, 0, 0.8 ) 87%
	);

	z-index: var(--index-below);
`;

export const Heading = styled( HeadingComponent )`
	z-index: var(--index-above);

	position: relative;

	color: var(--color-white);

	font-size: 3.2rem;

	margin-bottom: var(--spacing-16);
`;

export const Text = styled( TextComponent )`
	z-index: var(--index-above);

	position: relative;

	color: var(--color-white);
`;
