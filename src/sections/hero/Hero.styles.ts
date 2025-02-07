import styled from "styled-components";
import SanitizeHTMLContainerComponent from "../../components/sanitize-html-container/SanitizeHTMLContainer";
import HeadingComponent from "../../components/heading/Heading";

import * as media from '../../theme/custom-media';

export const Container = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	gap: var(--spacing-32);

	padding: var(--spacing-32);

	min-height: 30rem;

	background-color: var(--color-primary);

	width: 100%;

	${media.extraSmallMedia} {
		flex-direction: column;
		align-items: flex-start;
	}
`;

export const Heading = styled(HeadingComponent)`
	max-width: 58.6rem;
`;

export const SanitizeHTMLContainer = styled(SanitizeHTMLContainerComponent)`
	max-width: 56.3rem;
`;