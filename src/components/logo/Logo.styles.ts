import styled, { css } from "styled-components";

import SanitizeHTMLContainerComponent from "../sanitize-html-container/SanitizeHTMLContainer";

export const SanitizeHTMLContainer = styled(SanitizeHTMLContainerComponent).withConfig({ 
    shouldForwardProp: (prop) =>  
      !['color'].includes(prop)
    })<{color?: string}>`
    svg {
        color: var(--color-white);
        min-width: 18rem;
        min-height: 6.1rem;

        ${({ color }) => 
            color && css`
                color: ${`var(--color-${color})`};
        `}

        &:hover {
            color: var(--color-white);

            ${({ color }) => 
                color && css`
                    color: ${`var(--color-${color})`};
            `}
        }
    }
`;