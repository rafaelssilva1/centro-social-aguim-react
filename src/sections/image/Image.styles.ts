import styled, { css } from "styled-components";

export const Container = styled('section').withConfig({ 
	shouldForwardProp: (prop) =>  
	  !['hasTitle'].includes(prop)
	})<{hasTitle: boolean}>`
	width: 100%;

	display: flex;
	flex-direction: column;
	gap: var(--spacing-16);

	padding-bottom: var(--spacing-32);

	${({ hasTitle }) =>
		hasTitle && css`
			padding: var(--spacing-32);
			max-height: unset;
	`}
`;
