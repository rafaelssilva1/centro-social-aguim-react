import { useForm, SubmitHandler } from "react-hook-form";
import { useGoogleReCaptcha } from "@google-recaptcha/react";

import submitForm from "../../utils/submitForm";

import Input from "./components/input/Input";

import { Container, ErrorMessage, FormWrapper, SubmitButton, SuccessMessage } from "./Form.styles";

import { PropTypes } from "./Form.types";
import { FormData } from "../../utils/types";
import Loading from "../../components/loading/Loading";

const Form: React.FC<PropTypes> = ({ attributes, ...props }) => {
    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isSubmitSuccessful,
            isSubmitting,
            submitCount,
        },
        reset,
    } = useForm();
    const { executeV3 } = useGoogleReCaptcha();

    const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
        const handleReCaptchaVerify = async () => {
            if (!executeV3) {
              return;
            }
            const token = await executeV3('formsubmit');

            return token;
        };
        const token = await handleReCaptchaVerify();
        
        const submit = await submitForm({data, token, subject: 'Pedido de informação'});

        if(!submit?.data.valid) return;

        reset();
    };

    return (
        <Container {...props}>
            {isSubmitting ? <Loading /> : null}
            <FormWrapper onSubmit={handleSubmit(onSubmit)}>
                {attributes.data.map((input, index) => {
                    const {name, type: {id: type}, columns: {value: columns}, required, min, max} = input;

                    return (
                        <Input
                            fieldName={name}
                            valueName={name}
                            type={type}
                            columns={columns}
                            isRequired={required}
                            error={!!errors[name]}
                            registerCallback={register(name, { required: required, min: Number(min), max: Number(max)})}
                            key={index}
                        />
                    )
                })}
                <SubmitButton as={'input'} type="submit" value='Submeter' />
            </FormWrapper>
            {
                !!submitCount && !errors ? isSubmitSuccessful ?
                    <SuccessMessage>Submissão feita com sucesso!</SuccessMessage> :
                    <ErrorMessage>Ocorreu um erro na submissão. Tente novamente.</ErrorMessage>
                : null
            }
        </Container>
    )
}

export default Form;