import { useEffect, useRef } from "react";
import { observer } from "mobx-react";

import { menusStore } from "../../state/stores/menus";

import Logo from "../../components/logo/Logo";
import DesktopNavigation from "./components/desktop-navigation/DesktopNavigation";

import { Container } from "./Header.styles";

import { AllowedMenus } from "../../utils/types";
import useWindowSize from "../../hooks/useWindowSize";
import MobileNavigation from "./components/mobile-navigation/MobileNavigation";

const Header: React.FC = observer(() => {
    const headerRef = useRef<HTMLElement>(null);

    const {belowTablet} = useWindowSize();

    const {menus, getMenu} = menusStore;

    useEffect(() => {
        getMenu(AllowedMenus.Header);
    }, []);

    const headerMenu = menus.find(menu => menu.menu === AllowedMenus.Header);

    return (
        <Container ref={headerRef} >
            <Logo />
            {
                belowTablet ? 
                <MobileNavigation headerMenu={headerMenu} /> : 
                <DesktopNavigation headerMenu={headerMenu} headerRef={headerRef} />
            }
        </Container>
    )
})

export default Header;