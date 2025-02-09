import styled, { css } from "styled-components";
import typography from "../../theme/typography.styles";

export const BaseLink = styled('a').withConfig( {
	shouldForwardProp: ( prop ) => ! [ 'showAsButton' ].includes( prop ),
} )<{showAsButton?: boolean}>`
    display: flex;
    align-items: center;
    gap: var(--spacing-8);

    ${typography.p.default}

    ${ ( { showAsButton } ) =>
		showAsButton &&
		css`
			padding: var(--spacing-8) var(--spacing-20);
			border: 0.1rem solid var(--color-text);
			border-radius: var(--spacing-60);

			width: fit-content;
		` }
`;