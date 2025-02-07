import { optionsStore } from "../../state/stores/options";
import Link from "../link/Link";

import { SanitizeHTMLContainer } from "./Logo.styles";

const Logo: React.FC = ({...props}) => {
    const {options} = optionsStore;

    return (
        <Link href="/">
            <SanitizeHTMLContainer content={options.logo} {...props} />
        </Link>
    )
}

export default Logo;