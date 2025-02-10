import { useForm, SubmitHandler } from "react-hook-form"

import Input from "./components/input/Input";

import { Container, FormWrapper, SubmitButton } from "./Form.styles";

import { PropTypes, FormData } from "./Form.types";

const Form: React.FC<PropTypes> = ({ attributes, ...props }) => {
    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        reset
    } = useForm();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
        // reset();
    };

    return (
        <Container {...props}>
            <FormWrapper onSubmit={handleSubmit(onSubmit)}>
                {attributes.data.map((input, index) => {
                    const {name, type: {id: type}, columns: {value: columns}, required, min, max} = input;

                    const parsedName = name
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                        .replace(/º/g, "o")
                        .replace(/ª/g, "a")
                        .replace(/[`´‘’]/g, "'")
                        .replace(/[^a-zA-Z0-9']/g, "-")
                        .replace(/-+/g, "-")
                        .toLowerCase();

                    return (
                        <Input
                            fieldName={name}
                            type={type}
                            columns={columns}
                            isRequired={required}
                            error={!!errors[parsedName]}
                            registerCallback={register(parsedName, { required: required, min: Number(min), max: Number(max) })}
                            key={index}
                        />
                    )
                })}
                <SubmitButton as={'input'} type="submit" value='Submeter' />
            </FormWrapper>
        </Container>
    )
}

export default Form;