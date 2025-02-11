import styled from "styled-components";

import * as media from '../../theme/custom-media';

export const Container = styled.div`
    display: flex;
    gap: var(--spacing-16);
    
    ${media.extraSmallMedia} {
        flex-direction: column;
    }
`;

export const InnerContainer = styled.div`
    flex: 1;
`;