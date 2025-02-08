import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import Link from "../../../../components/link/Link";

import { NavContainer } from "../../Header.styles";
import { InnerNavigation, LinkText } from "./DesktopNavigation.styles";

import { PropTypes } from "./DesktopNavigation.types";

const DesktopNavigation: React.FC<PropTypes> = ({headerMenu, headerRef, ...props}) => {
    const [innerNav, setInnerNav] = useState<number | null>(null);
    const innerNavRef = useRef<HTMLDivElement>(null);

    const location = useLocation();

    useEffect(() => {
        setInnerNav(null);
    }, [location]);

    if(!headerMenu) return null;

    return (
        <>
            <NavContainer {...props}>
                {headerMenu?.data.map((item, index) => {
                    const {slug, title, children} = item;
        
                    return (
                        <span
                            onMouseEnter={() => {
                                children.length && setInnerNav(index)
                                !children.length && setInnerNav(null)
                            }}
                            key={index}
                        >
                            {
                                !children.length ?
                                <Link
                                    href={slug}
                                >
                                    {title}
                                </Link> :
                                <LinkText>
                                    {title}
                                    {children.length ? ' +' : null}
                                </LinkText>
                            }
                        </span>
                    )
                })}
            </NavContainer>
            {innerNav !== null ?
                <InnerNavigation
                    headerHeight={headerRef?.current?.clientHeight}
                    onMouseLeave={() => setInnerNav(null)}
                    ref={innerNavRef}
                >
                    {headerMenu.data[innerNav].children.map((item, index) => {
                        const {slug, title} = item;

                        return (
                            <Link href={slug} key={index}>{title}</Link>
                        )
                    })}
                </InnerNavigation>
            : null}
        </>
    )
}

export default DesktopNavigation;