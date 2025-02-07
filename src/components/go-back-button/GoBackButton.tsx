import ArrowLeft from "../icons/ArrowLeft";
import Text from "../text/Text";
import Link from "../link/Link";
import { IconPosition } from "../link/Link.types";

const GoBackButton: React.FC = () => {
    return (
        <Link href="/" icon={<ArrowLeft />} iconPosition={IconPosition.Left} showAsButton>
            <Text>Ir para a página principal</Text>
        </Link>
    );
};

export default GoBackButton;