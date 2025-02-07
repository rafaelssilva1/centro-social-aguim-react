import styled from "styled-components";

import HeadingComponent from "../../components/heading/Heading";

export const Container = styled.section`
	width: 100%;
	height: 53.1rem;

	display: flex;
	flex-direction: column;
	gap: var(--spacing-16);

	padding-bottom: var(--spacing-32);
`;

export const Heading = styled(HeadingComponent)`
	padding-inline: var(--spacing-32);
	padding-top: var(--spacing-32);
`;