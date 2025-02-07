import styled from "styled-components";
import { TextTypes } from "./Text.types";
import typography from "../../theme/typography.styles";

export const BaseText = styled('p').withConfig({
  shouldForwardProp: (prop) =>
    !['type'].includes(prop)
})<{type?: TextTypes}>`
    ${({ type }) => type === TextTypes.Default && typography.p.default}
    ${({ type }) => type === TextTypes.Medium && typography.p.medium}
    ${({ type }) => type === TextTypes.Small && typography.p.small}
`;
