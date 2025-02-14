import styled, { css } from 'styled-components';
import Button from '../../components/button/Button';
import typography from '../../theme/typography.styles';
import Text from '../../components/text/Text';
import Heading from '../../components/heading/Heading';

export const Container = styled('section').withConfig({
	shouldForwardProp: (prop) =>
		!['isSubmitting'].includes(prop)
}) <{ isSubmitting?: boolean }>`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: var( --spacing-24 );

	width: 100%;

	padding: var(--spacing-32);

	position: relative;

	${({ isSubmitting }) =>
		isSubmitting &&
		css`
            height: 80vh;
			overflow: hidden;
		` }
`;

export const SubmitButton = styled(Button)`
	width: calc(100% - var(--spacing-16));

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
	justify-content: center;
	gap: var( --spacing-16 );

	width: 100%;
`;

export const SuccessMessage = styled(Text)`
	color: var(--color-success);
	font-weight: 700;
`;

export const ErrorMessage = styled(Text)`
	color: var(--color-required);
	font-weight: 700;
`;

export const GroupContainer = styled.div`
	width: 100%;

	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: var( --spacing-16 );
`;

export const StyledHeading = styled(Heading)`
	align-self: flex-start;
	text-align: left;
    width: 100%;
	
	margin-top: var(--spacing-16);
`;

export const FormFieldset = styled.fieldset`
	width: 100%;

	margin-block: var(--spacing-16);
	padding: var(--spacing-16);

	display: flex;
	flex-wrap: wrap;
	gap: var(--spacing-16);

	border-radius: var(--spacing-8);
`;

export const FieldsetLegend = styled.legend`
	${typography.p.medium};

	padding-inline: var(--spacing-8);
`;

export const StyledText = styled(Text)`
	width: 100%;
`;