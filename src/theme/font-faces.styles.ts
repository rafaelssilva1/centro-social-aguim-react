import { css } from "@emotion/react";

import { family } from "./typography.styles";

export default css`
  @font-face {
    font-family: ${family.quicksand};
    src: url(../assets/fonts/quicksand/quicksand.ttf)
      format('truetype');
  }
  @font-face {
    font-family: ${family.rufina};
    src: url(../assets/fonts/rufina/rufina-bold.ttf)
      format('truetype');
  }
`;
