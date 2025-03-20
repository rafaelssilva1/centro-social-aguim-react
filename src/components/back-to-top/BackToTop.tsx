import scrollToTop from "../../utils/scroll-to-top";
import ArrowTop from "../icons/ArrowTop";

import { Button } from "./BackToTop.styles";

const BackToTop: React.FC = () => {
    return (
        <Button onClick={() => scrollToTop({smooth: true})} aria-label="Voltar ao topo do site">
            <ArrowTop />
        </Button>
    )
};

export default BackToTop;