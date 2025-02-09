import styled from 'styled-components';

import Text from '../../components/text/Text';

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	gap: var(--spacing-24);

	padding: var(--spacing-32);

	width: 100%;
`;

export const InnerContainer = styled.div`
	display: flex;
	gap: var(--spacing-16);
`;

export const CustomSelectContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: var(--spacing-16);

	margin-bottom: var(--spacing-40);

	position: relative;
`;

export const CustomSelect = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: var(--spacing-16);

	padding: var(--spacing-16);

	min-width: 20rem;
	width: fit-content;

	border: 0.1rem solid var(--color-text);
	border-radius: var(--spacing-60);

	cursor: pointer;

	svg {
		max-width: 1.6rem;
		max-height: 1.6rem;

		transform: rotate( 90deg );
	}
`;

export const SelectOptions = styled.div`
	position: absolute;
	top: 10rem;

	background-color: var(--color-white);

	height: 20rem;

	overflow: hidden;

	border: 0.1rem solid var(--color-text);
	border-radius: var(--spacing-16);

	box-shadow: 0 0 2.4rem 0 rgba(0,0,0,0.2);;
`;

export const SelectContainer = styled.div`
	overflow: scroll;

	height: 100%;
`;

export const Option = styled(Text)`
	padding: var(--spacing-16);

	cursor: pointer;
`;