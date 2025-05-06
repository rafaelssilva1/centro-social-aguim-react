import styled from "styled-components";
import HeadingComponent from "../heading/Heading";

export const Container = styled.div`
    width: calc(100% + 1.5rem);
    height: 102%;

    border: none;

    padding: 0;

    overflow-y: scroll;

    position: absolute;
    inset: 0;
    background-color: var(--color-white);

    z-index: var(--index-modal);
`;

export const CloseWrapper = styled.span`
    position: absolute;
    top: var(--spacing-44);
    right: var(--spacing-32);

    cursor: pointer;
`;

export const Heading = styled(HeadingComponent)`
    padding: var(--spacing-32);
    background-color: var(--color-primary);
    padding-right: 10rem;

`;