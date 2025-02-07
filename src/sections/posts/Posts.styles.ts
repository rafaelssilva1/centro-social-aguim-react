import styled from 'styled-components';

import * as media from '../../theme/custom-media';

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	gap: var(--spacing-32);

	padding: var(--spacing-32);

	background-color: var(--color-primary);
`;

export const PostsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat( 2, 1fr );
	gap: var(--spacing-16);

	${media.lteSmallMedia} {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const AssembliesContainer = styled.div`
	display: flex;
	gap: var(--spacing-16);

	${media.extraSmallMedia} {
		flex-direction: column;
	}
`;
