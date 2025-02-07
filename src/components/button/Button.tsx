import { ButtonHTMLAttributes } from "react";
import { BaseButton } from "./Button.styles";

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({children, ...props}) => {
    return (
        <BaseButton {...props}>
            {children}
        </BaseButton>
    );
};

export default Button;