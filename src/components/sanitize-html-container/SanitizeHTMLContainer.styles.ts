import typography, { weight } from "../../theme/typography.styles";
import styled from "styled-components";

export const Container = styled.div`
    ${typography.p};

    svg {
        color: var(--color-text);

        width: 2.4rem;
        height: 2.4rem;

        transition: color 150ms ease-in-out;

        &:hover {
            color: var(--color-black);
        }
    }

    li {
        list-style: disc;
        list-style-position: inside;

        li {
            list-style: circle;
        }
    }

    a {
        font-weight: ${weight.bold};
    }

    ul {
        ul {
            margin-left: var(--spacing-24);
        }
    }
`;