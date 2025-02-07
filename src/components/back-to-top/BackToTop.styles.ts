import styled from "styled-components"
import ButtonComponent from "../button/Button";

export const Button = styled(ButtonComponent)`
    border-radius: 50%;
    background-color: var(--color-white);
    color: var(--color-secondary);
    border: none;

    width: var(--spacing-48);
    height: var(--spacing-48);

    position: absolute;
    top: calc(var(--spacing-24) * -1);
    right: var(--spacing-16);

    svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 2.4rem;
        height: 2.4rem;
    }  
`;