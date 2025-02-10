import typography from "../../theme/typography.styles";
import styled, { css } from "styled-components";

import * as media from '../../theme/custom-media';

export const Container = styled('div').withConfig( {
	shouldForwardProp: ( prop ) => ! [ 'columns' ].includes( prop ),
} )<{columns?: string}>`
    ${typography.p.default};

    ${ ( { columns } ) =>
		columns &&
		css`
			columns: ${columns};

            ${media.extraSmallMedia} {
                columns: 1;
            }
		` }
`;