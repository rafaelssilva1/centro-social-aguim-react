import styled, { css } from "styled-components";
import Text from "../../../../components/text/Text";

export const InnerNavigation = styled('div').withConfig({ 
	shouldForwardProp: (prop) =>  
	  !['headerHeight'].includes(prop)
	})<{headerHeight?: number}>`
    position: absolute;
    left: 0;
    right: 0;

    background-color: var(--color-white);

    border-bottom-left-radius:  var(--spacing-32);
    border-bottom-right-radius:  var(--spacing-32);

    display: flex;
    flex-direction: column;
    gap: var(--spacing-16);

    padding: var(--spacing-32);

    z-index: var(--index-menu);

    box-shadow: 0 0 2.4rem 0 rgba(0,0,0,0.2);

    ${({ headerHeight }) => 
        headerHeight && css`
            top: ${`${headerHeight / 10}rem`};
    `}
`;

export const LinkText = styled(Text)`
  text-transform: uppercase;

  cursor: pointer;
`;