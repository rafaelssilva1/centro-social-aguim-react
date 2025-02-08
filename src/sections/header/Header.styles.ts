import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--spacing-16);

    padding: var(--spacing-32);

    background-color: var(--color-primary);

    position: relative;
`;

export const NavContainer = styled.nav`
    display: flex;
    gap: var(--spacing-16);
`;