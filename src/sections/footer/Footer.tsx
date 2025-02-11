import { useEffect } from "react";
import { observer } from "mobx-react";

import { menusStore } from "../../state/stores/menus";
import { optionsStore } from "../../state/stores/options";

import Logo from "../../components/logo/Logo";
import Image from "../../components/image/Image";
import Facebook from "../../components/icons/Facebook";
import Instagram from "../../components/icons/Instagram";
import BackToTop from "../../components/back-to-top/BackToTop";

import { Address, Container, InnerContainer, Link, NavContainer, SocialMedia, Text, ExternalLink } from "./Footer.styles";

import { AllowedMenus } from "../../utils/types";
import { TextTypes } from "../../components/text/Text.types";

const Footer: React.FC = observer(() => {
    const {menus, getMenu} = menusStore;
    const {options} = optionsStore;

    useEffect(() => {
        getMenu(AllowedMenus.Footer);
    }, []);

    const footerMenu = menus.find(menu => menu.menu === AllowedMenus.Footer);

    return (
        <Container>
            <Logo color="white" />
            <InnerContainer>
                <Address type={TextTypes.Medium}>{options.address}</Address>
                <span>
                    <Text type={TextTypes.Medium}>Secretaria: <ExternalLink href={`tel:${options.phone_secretary}`}>{options.phone_secretary}</ExternalLink></Text>
                    <Text type={TextTypes.Small}>{options.message_landline}</Text>
                </span>
                <span>
                    <Text type={TextTypes.Medium}>Pavilhão: <ExternalLink href={`tel:${options.phone_pavilion}`}>{options.phone_pavilion}</ExternalLink></Text>
                    <Text type={TextTypes.Small}>{options.message_landline}</Text>
                </span>
                <span>
                    <Text type={TextTypes.Medium}>Telemóvel: <ExternalLink href={`tel:${options.phone_mobile}`}>{options.phone_mobile}</ExternalLink></Text>
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
                <ExternalLink href={'https://www.livroreclamacoes.pt/Inicio/'} target="_blank">
                    <Image src="/images/complaint_book.png" alt="Livro de reclamações" width={110} height={43} />
                </ExternalLink>
            </InnerContainer>
            <InnerContainer>
                <ExternalLink href={options.facebook} target="_blank">
                    <SocialMedia type={TextTypes.Small}>
                        <Facebook />
                        <span>Facebook</span>
                    </SocialMedia>
                </ExternalLink>
                <ExternalLink href={options.instagram} target="_blank">
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