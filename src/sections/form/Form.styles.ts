import styled from 'styled-components';
import Button from '../../components/button/Button';
import typography from '../../theme/typography.styles';

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	gap: var( --spacing-24 );

	width: 100%;

	padding: var(--spacing-32);
`;

export const SubmitButton = styled(Button)`
	width: 100%;

	border-radius: var( --spacing-60 );
	border-width: 0.1rem;

	background-color: var( --color-terciary );
	color: var( --color-text );

	padding: var( --spacing-12 ) var( --spacing-32 );

	justify-content: center;
	text-transform: unset;

	${typography.p.medium};

	cursor: pointer;
`;

export const FormWrapper = styled.form`
	display: flex;
	flex-wrap: wrap;
	gap: var( --spacing-16 );

	width: 100%;
`;
