import { useEffect } from "react";
import { createPortal } from "react-dom";
import scrollToTop from "../../utils/scroll-to-top";

import Close from "../icons/Close";

import { CloseWrapper, Container, Heading } from "./Modal.styles";

import { PropTypes } from "./Modal.types";
import { RemoveScroll } from "react-remove-scroll";

const Modal: React.FC<PropTypes> = ({ children, isOpen, callback, title, ...props }) => {
    if (!isOpen) return null;

    useEffect(() => {
        isOpen && scrollToTop({ smooth: false });
    }, [isOpen])

    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') callback(false);
        })

        return () => {
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') callback(false);
            })
        }
    }, [])

    return (
        createPortal(
            <RemoveScroll forwardProps>
                <Container open={isOpen} {...props}>
                    <CloseWrapper onClick={() => callback(false)}>
                        <Close />
                    </CloseWrapper>
                    {title ? <Heading level="2">{title}</Heading> : null}
                    {children}
                </Container>
            </RemoveScroll>,
            document.body
        )
    )
}

export default Modal;