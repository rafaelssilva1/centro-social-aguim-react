import { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Link from "../../../../components/link/Link";
import Hamburguer from "../../../../components/icons/Hamburguer";

import { NavContainer, Close, IconWrapper, InnerNavigation } from "./MobileNavigation.styles";

import { PropTypes } from "./MobileNavigation.types";
import { LinkText } from "../desktop-navigation/DesktopNavigation.styles";

const MobileNavigation: React.FC<PropTypes> = ({headerMenu}) => {
    const [open, setOpen] = useState<boolean>(false);
    const [innerNav, setInnerNav] = useState<number | null>(null);

    const location = useLocation();

    useEffect(() => {
        setInnerNav(null);
        setOpen(false);
    }, [location]);
    
    return (
        <>
            <IconWrapper onClick={() => setOpen(true)}>
                <Hamburguer />
            </IconWrapper>
            {
                open ? 
                <NavContainer>
                    <IconWrapper onClick={() => setOpen(false)}>
                        <Close />
                    </IconWrapper>
                    {headerMenu?.data.map((item, index) => {
                        const {slug, title, children} = item;
            
                        return (
                            <Fragment key={index}>
                                <span
                                    style={{fontWeight: innerNav === index ? 'bold' : 'normal'}}
                                >
                                    {
                                    !children.length ?
                                    <Link
                                        href={slug}
                                    >
                                        {title}
                                    </Link> :
                                    <LinkText
                                        onClick={() => setInnerNav(index)}
                                    >
                                        {title}
                                        {children.length ? ' +' : null}
                                    </LinkText>
                                }
                                </span>
                                {
                                    children.length && index === innerNav ?
                                    <InnerNavigation>
                                        {
                                            children.map((item, index) => {
                                                const {slug, title} = item;
                                                
                                                return (
                                                    <Link href={slug} key={index}>
                                                        {title}
                                                    </Link>
                                                )
                                            })
                                        }
                                    </InnerNavigation> : 
                                    null
                                }
                            </Fragment>
                        )
                    })}
                </NavContainer> :
                null
            }
        </>
    )
}

export default MobileNavigation;