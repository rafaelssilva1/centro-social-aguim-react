import styled from 'styled-components';

import ImageComponent from '../../../../components/image/Image';
import Link from '../../../../components/link/Link';

export const Container = styled(Link)`
	display: flex;
	flex-direction: column;
	gap: var(--spacing-32);

	overflow: hidden;

	flex-shrink: 0;

	text-transform: unset;

	max-width: 30rem;
`;

export const InnerContainer = styled.div`
	position: relative;
	overflow: hidden;

	display: flex;
	flex-direction: column;
	gap: var(--spacing-8);

	margin-bottom: var(--spacing-16);
`;

export const Image = styled(ImageComponent)`
	border-top-left-radius: var(--spacing-32);
	border-top-right-radius: var(--spacing-32);

	height: 30rem;
`;

export const Overlay = styled.span`
	position: absolute;
	inset: 0;

	background: linear-gradient(
		rgba( 255, 255, 255, 0.2 ) 0%,
		rgba( 0, 0, 0, 0.6 ) 87%
	);

	height: 30rem;

	z-index: var(--index-below);
`;
