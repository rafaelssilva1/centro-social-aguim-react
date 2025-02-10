import { TextTypes } from "../../../../components/text/Text.types";
import { Text } from "./Error.styles";

const Error: React.FC = () => {
    return (
        <Text type={TextTypes.Small}>O campo é obrigatório.</Text>
    )
}

export default Error;