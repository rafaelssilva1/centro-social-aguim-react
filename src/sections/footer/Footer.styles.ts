import styled from "styled-components";
import LinkComponent from "../../components/link/Link";
import TextComponent from "../../components/text/Text";
import ExternalLinkComponent from "../../components/external-link/ExternalLink";

import * as media from '../../theme/custom-media';
import typography from "../../theme/typography.styles";

export const Container = styled.footer`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--spacing-16);

    padding: var(--spacing-80);

    background-color: var(--color-secondary);
    color: var(--color-white);

    width: 100%;

    position: relative;

    ${media.extraSmallMedia} {
        padding: var(--spacing-32);
        flex-direction: column;
        gap: var(--spacing-32);
    }
`;

export const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-8);
`;

export const NavContainer = styled.nav`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-8);
`;

export const SocialMedia = styled(TextComponent)`
    display: flex;
    gap: var(--spacing-4);
    color: var(--color-white);
`;

export const Text = styled(TextComponent)`
    color: var(--color-white);

    display: flex;
    gap: var(--spacing-4);
`;

export const Link = styled(LinkComponent)`
    color: var(--color-white);

    text-transform: unset;
`;

export const Address = styled(TextComponent)`
    font-size: 2.4rem;
    color: var(--color-white);

    margin-bottom: var(--spacing-32);

    max-width: 30rem;
`;

export const ExternalLink = styled(ExternalLinkComponent)`
    ${typography.p.medium}
    color: var(--color-white);
`;