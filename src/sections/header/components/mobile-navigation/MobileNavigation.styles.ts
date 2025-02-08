import styled from "styled-components";

import CloseIcon from "../../../../components/icons/Close";

export const IconWrapper = styled.span`
    cursor: pointer;
`;

export const Close = styled(CloseIcon)`
    position: absolute;
    top: var(--spacing-48);
    right: var(--spacing-32);
`;

export const NavContainer = styled.nav`
    position: absolute;
    inset: 0;
    height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: var(--spacing-16);
    align-items: center;
    justify-content: center;

    background-color: var(--color-primary);

    z-index: var(--index-menu);
`;

export const InnerNavigation = styled.div`
    background-color: var(--color-white);

    display: flex;
    flex-direction: column;
    gap: var(--spacing-16);

    padding: var(--spacing-32);

    width: 100%;
`;