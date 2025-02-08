import styled, { css } from "styled-components";

import Image from "../../components/image/Image";

export const Container = styled('section').withConfig({ 
	shouldForwardProp: (prop) =>  
	  !['hasTitle'].includes(prop)
	})<{hasTitle: boolean}>`
	width: 100%;
	height: 53.1rem;

	display: flex;
	flex-direction: column;
	gap: var(--spacing-16);

	padding-bottom: var(--spacing-32);

	height: auto;
	max-height: 45rem;

	${({ hasTitle }) =>
		hasTitle && css`
			padding: var(--spacing-32);
			max-height: unset;
	`}
`;

export const ImageComponent = styled(Image).withConfig({ 
	shouldForwardProp: (prop) =>  
	  !['level'].includes(prop)
	})<{hasTitle: boolean}>`
`;