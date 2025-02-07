import styled from "styled-components";

import SanitizeHTMLContainerComponent from "../sanitize-html-container/SanitizeHTMLContainer";

export const SanitizeHTMLContainer = styled(SanitizeHTMLContainerComponent)`
    svg {
        color: var(--color-white);
        min-width: 18rem;
        min-height: 6.1rem;

        &:hover {
            color: var(--color-white);
        }
    }
`;