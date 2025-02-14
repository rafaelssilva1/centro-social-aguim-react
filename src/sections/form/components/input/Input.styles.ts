import styled, { css } from 'styled-components';
import typography from '../../../../theme/typography.styles';

import * as media from '../../../../theme/custom-media';

export const InputSpan = styled('span').withConfig({
	shouldForwardProp: (prop) => !['columns'].includes(prop),
}) <{ columns?: string }>`
	color: var( --color-text );

	${({ columns }) =>
		columns &&
		css`
			width: calc(${Number(columns)}% - var(--spacing-16));

			${media.extraSmallMedia} {
				width: 100%;
			}
		` }
`;

export const InputLabel = styled('label').withConfig({
	shouldForwardProp: (prop) => !['columns'].includes(prop),
}) <{ columns?: string }>`
	width: calc(100% - var(--spacing-16));

	display: flex;
	flex-direction: column;
	gap: var( --spacing-4 );

	${typography.p.medium};

	${({ columns }) =>
		columns &&
		css`
			width: calc(${Number(columns)}% - var(--spacing-16));

			${media.extraSmallMedia} {
				width: 100%;
			}
		` }
`;

export const StyledInput = styled('input').withConfig({
	shouldForwardProp: (prop) => !['error'].includes(prop),
}) <{ error?: boolean }>`
	border-radius: var( --spacing-32 );
	border: 0.1rem solid var( --color-text );

	padding: var( --spacing-12 ) var( --spacing-32 );

	${({ error }) =>
		error &&
		css`
			border-color: var(--color-required);
	` }

	&[type=date] {
		appearance: none;
		background-color: var(--color-white);
		padding: var( --spacing-12 ) var( --spacing-32 );
		min-height: 4.2rem;
	}
`;

export const TextArea = styled('textarea').withConfig({
	shouldForwardProp: (prop) => !['error'].includes(prop),
}) <{ error?: boolean }>`
	border-radius: var( --spacing-32 );
	border: 0.1rem solid var( --color-text );
	width: 100%;

	padding: var( --spacing-12 ) var( --spacing-32 );

	${({ error }) =>
		error &&
		css`
			border-color: var(--color-required);
	` }
`;

export const StyledCheckbox = styled('input').withConfig({
	shouldForwardProp: (prop) => !['error'].includes(prop),
}) <{ error?: boolean }>`
		${({ error }) =>
		error &&
		css`
			border-color: var(--color-required);
	` }
`;

export const StyledFileInput = styled('input').withConfig({
	shouldForwardProp: (prop) => !['error'].includes(prop),
}) <{ error?: boolean }>`
	width: fit-content;

	cursor: pointer;

	&::-webkit-file-upload-button {
		display: none;
	}

	&::before {
		content: 'Escolher ficheiros';
		display: inline-block;
		padding: var(--spacing-8) var(--spacing-16) var(--spacing-8) var(--spacing-40);
		margin-right: var(--spacing-8);
		
		background: url('data:image/svg+xml,<svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 12.6667V15.5556C15 15.9386 14.8478 16.306 14.5769 16.5769C14.306 16.8478 13.9386 17 13.5556 17H3.44444C3.06135 17 2.69395 16.8478 2.42307 16.5769C2.15218 16.306 2 15.9386 2 15.5556V12.6667M12.1111 7.61111L8.5 4M8.5 4L4.88889 7.61111M8.5 4V12.6667" stroke="black" stroke-linecap="round" stroke-linejoin="round"/></svg>') no-repeat;
		background-position: var(--spacing-16);

		border: 0.1rem solid var(--color-text);
		border-radius: var(--spacing-32);
	}

		${({ error }) =>
		error &&
		css`
			border-color: var(--color-required);
	` }
`;

export const CheckboxContainer = styled.div`
	display: flex;
	gap: var(--spacing-8);
`;