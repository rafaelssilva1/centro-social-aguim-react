import { observer } from "mobx-react";

import { optionsStore } from "../../state/stores/options";
import Link from "../link/Link";

import { SanitizeHTMLContainer } from "./Logo.styles";
import { PropTypes } from "./Logo.types";

const Logo: React.FC<PropTypes> = observer(({color = 'text', ...props}) => {
    const {options} = optionsStore;

    return (
        <Link href="/" aria-label="Logótipo do Centro Social Ó de Aguim - voltar à página inicial">
            <SanitizeHTMLContainer color={color} content={options.logo} columns='1' {...props} />
        </Link>
    )
})

export default Logo;