import { css } from "styled-components";

export const family = {
  rufina: "Rufina",
  quicksand: "Quicksand",
};

export const weight = {
  regular: 400,
  bold: 700,
};

export const fontQuicksand = `${family.quicksand}`;
export const fontRufina = `${family.rufina}`;

const sharedStyles = css`
  font-family: ${family.rufina}, 'Times New Roman', Times, serif;
  line-height: 1.1;
  font-weight: 400;
`;

const typography = {
  fontQuicksand,
  fontRufina,
  weight,
  h1: css`
    ${sharedStyles}
    font-size: clamp(4.8rem, 4.171rem + 1.964vw, 7rem);
  `,
  h2: css`
    ${sharedStyles}
    font-size: clamp(3.2rem, 2.686rem + 1.607vw, 5rem);
  `,
  h3: css`
    ${sharedStyles}
    font-size: 2rem;
  `,
  h4: css`
    ${sharedStyles}
    font-size: 2rem;
  `,
	p: {
    default: css`
      font-family: ${ fontQuicksand }, Arial, Helvetica, sans-serif;
      font-size: 1.6rem;
      line-height: 1.5;
      color: var( --color-text );
    `,
    medium: css`
      font-family: ${ fontQuicksand }, Arial, Helvetica, sans-serif;
      font-size: 1.4rem;
      line-height: 1.5;
      color: var( --color-text );
    `,
    small: css`
      font-family: ${ fontQuicksand }, Arial, Helvetica, sans-serif;
      font-size: 1.2rem;
      line-height: 1.5;
      color: var( --color-text );
    `
  },
  a: css`
    font-family: ${ fontQuicksand }, Arial, Helvetica, sans-serif;
    font-size: 1.6rem;
    line-height: 2.2rem;
    color: var( --color-text );
    text-decoration: none;
    cursor: pointer;
  `,
};

export default typography;
