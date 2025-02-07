import styled from 'styled-components';

export const Container = styled.article`
	display: flex;
	flex-direction: column;
	gap: var(--spacing-8);

	border-top: 0.1rem solid var(--color-text);

	padding-top: var(--spacing-16);

	flex: 1;
`;

export const Time = styled.time`
	font-size: 2rem;
`;
