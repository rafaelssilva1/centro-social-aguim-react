import styled from 'styled-components';

import LinkComponent from '../../components/link/Link';
import TextComponent from '../../components/text/Text';

export const Container = styled.section`
	display: flex;
	flex-direction: column;

	padding: var(--spacing-32) var(--spacing-16);

	width: 100%;
`;

export const InnerContainer = styled.div`
	&:not( :last-of-type ) {
		margin-bottom: var(--spacing-16);
	}
`;

export const Address = styled.p`
	font-size: 2.4rem;

	margin-bottom: var(--spacing-32);
`;

export const Link = styled( LinkComponent )`
	text-transform: unset;
	text-decoration: underline;

	margin-top: var(--spacing-16);
`;

export const SmallText = styled( TextComponent )`
	font-size: 1.2rem;
`;


export const Text = styled(TextComponent)`
    display: flex;
    gap: var(--spacing-4);
`;
