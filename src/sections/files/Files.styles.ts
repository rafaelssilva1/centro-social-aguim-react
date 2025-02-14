import styled from 'styled-components';

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	gap: var(--spacing-24);

    padding: var(--spacing-32);

	width: 100%;
`;

export const InnerContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: var(--spacing-16);
`;
