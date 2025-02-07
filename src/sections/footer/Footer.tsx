import { useEffect } from "react";
import { observer } from "mobx-react";

import { menusStore } from "../../state/stores/menus";
import { optionsStore } from "../../state/stores/options";

import Logo from "../../components/logo/Logo";
import Image from "../../components/image/Image";
import Facebook from "../../components/icons/Facebook";
import Instagram from "../../components/icons/Instagram";

import { Address, Container, InnerContainer, Link, NavContainer, SocialMedia, Text } from "./Footer.styles";

import { AllowedMenus } from "../../utils/types";
import { TextTypes } from "../../components/text/Text.types";
import BackToTop from "../../components/back-to-top/BackToTop";
import ExternalLink from "../../components/external-link/ExternalLink";

const Footer: React.FC = observer(() => {
    const {menus, getMenu} = menusStore;
    const {options} = optionsStore;

    useEffect(() => {
        getMenu(AllowedMenus.Footer);
    }, []);

    const footerMenu = menus.find(menu => menu.menu === AllowedMenus.Footer);

    return (
        <Container>
            <Logo />
            <InnerContainer>
                <Address type={TextTypes.Medium}>{options.address}</Address>
                <span>
                    <Text type={TextTypes.Medium}>Secretaria: {options.phone_secretary}</Text>
                    <Text type={TextTypes.Small}>{options.message_landline}</Text>
                </span>
                <span>
                    <Text type={TextTypes.Medium}>Pavilhão: {options.phone_pavilion}</Text>
                    <Text type={TextTypes.Small}>{options.message_landline}</Text>
                </span>
                <span>
                    <Text type={TextTypes.Medium}>Telemóvel: {options.phone_mobile}</Text>
                    <Text type={TextTypes.Small}>{options.message_cell}</Text>
                </span>
                <Link href={`mailto:${options.email}`}>
                    <Text type={TextTypes.Medium}>{options.email}</Text>
                </Link>
            </InnerContainer>
            <InnerContainer>
                <NavContainer>
                    {footerMenu?.data.map((item, index) => {
                        return (
                            <Link key={index} href={item.slug}>
                                <Text type={TextTypes.Small}>{item.title}</Text>
                            </Link>
                        )
                    })}
                </NavContainer>
                <ExternalLink showIcon={false} href={'https://www.livroreclamacoes.pt/Inicio/'} target="_blank">
                    <Image src="/images/complaint_book.png" alt="Livro de reclamações" width={110} height={43} />
                </ExternalLink>
            </InnerContainer>
            <InnerContainer>
                <ExternalLink showIcon={false} href={options.facebook} target="_blank">
                    <SocialMedia type={TextTypes.Small}>
                        <Facebook />
                        <span>Facebook</span>
                    </SocialMedia>
                </ExternalLink>
                <ExternalLink showIcon={false} href={options.instagram} target="_blank">
                    <SocialMedia type={TextTypes.Small}>
                        <Instagram />
                        <span>Instagram</span>
                    </SocialMedia>
                </ExternalLink>
            </InnerContainer>
            <BackToTop />
        </Container>
    )
});

export default Footer;