import styled from "styled-components";
import typography from "../../theme/typography.styles";
import { StylingProps } from "./Heading.types";

export const BaseHeading =  styled('h1').withConfig({ 
    shouldForwardProp: (prop) =>  
      !['level'].includes(prop)
    })<StylingProps>`
        ${({ level }) => level === "1" && typography.h1}
        ${({ level }) => level === "2" && typography.h2}
        ${({ level }) => level === "3" && typography.h3}
        ${({ level }) => level === "4" && typography.h4}
        ${({ level }) => level === "5" && typography.p.default}
`;
