import styled from 'styled-components';

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	gap: var(--spacing-32);

	height: 78.5rem;
	width: 100%;

	padding-block: var(--spacing-32);

	iframe {
		border-radius: var(--spacing-32);
	}
`;
