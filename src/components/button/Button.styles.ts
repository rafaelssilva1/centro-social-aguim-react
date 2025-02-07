import styled from "styled-components";
import typography from "../../theme/typography.styles";

export const BaseButton = styled.button`
	${ typography.a };
	text-transform: uppercase;

	display: flex;
	align-items: center;
	gap: var( --spacing-8 );
    padding: var( --spacing-8 ) var( --spacing-20 );
    border: 0.1rem solid var( --color-text );
    border-radius: var( --spacing-60 );

    width: fit-content;
`;