import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--color-white);

    z-index: var(--index-loading);
`;