import ArrowTop from "../icons/ArrowTop";

import { Button } from "./BackToTop.styles";

const BackToTop: React.FC = () => {
    const handleBackToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <Button onClick={handleBackToTop}>
            <ArrowTop />
        </Button>
    )
};

export default BackToTop;