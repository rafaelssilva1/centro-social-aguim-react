import { BaseText } from "./Text.styles";
import { PropTypes, TextTypes } from "./Text.types";

const Text: React.FC<PropTypes> = ({children, type = TextTypes.Default, ...props}) => {
    return <BaseText type={type} {...props}>{children}</BaseText>
};

export default Text;