import styled from 'styled-components';

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	gap: var(--spacing-32);

	width: 100%;

	padding: var(--spacing-32);

	iframe {
		border-radius: var(--spacing-32);
	}
`;
