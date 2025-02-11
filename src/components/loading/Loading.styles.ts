import styled, { css } from "styled-components";

export const Container = styled('div').withConfig( {
	shouldForwardProp: ( prop ) => ! [ 'ignoreOverlay' ].includes( prop ),
} )<{ignoreOverlay?: boolean}>`
    position: absolute;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--color-white);

    z-index: var(--index-modal);

    ${ ( { ignoreOverlay } ) =>
		ignoreOverlay &&
		css`
			position: unset;
		` }
`;