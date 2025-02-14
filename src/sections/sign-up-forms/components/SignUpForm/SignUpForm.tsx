import { SubmitHandler, useForm } from "react-hook-form";
import { useGoogleReCaptcha } from "@google-recaptcha/react";

import submitForm from "../../../../utils/submitForm";
import scrollToTop from "../../../../utils/scroll-to-top";

import Input from "../../../form/components/input/Input";
import Loading from "../../../../components/loading/Loading";

import { FormWrapper, Container, SubmitButton, GroupContainer, StyledHeading, FormFieldset, FieldsetLegend, StyledText, SuccessMessage, ErrorMessage } from "../../../form/Form.styles";

import { PropTypes } from "./SignUpForm.types";
import { FormData } from "../../../../utils/types";
import { FormFieldType } from "../../../form/Form.types";
import { useEffect } from "react";

const SignUpForm: React.FC<PropTypes> = ({ schema, callback, title, ...props }) => {
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

    if (!schema) return null;

    const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
        scrollToTop({smooth: false});
        const handleReCaptchaVerify = async () => {
            if (!executeV3) {
                return;
            }
            const token = await executeV3(`signupform`);

            return token;
        };
        const token = await handleReCaptchaVerify();

        const submit = await submitForm({data, token, subject: `Pedido de informação - ${title}`});

        if(!submit?.data.valid) return;

        reset();
    };

    useEffect(() => {
      isSubmitSuccessful && callback(false);
    }, [isSubmitSuccessful]);

    return (
        <Container as="div" isSubmitting={isSubmitting} {...props}>
            {isSubmitting ? <Loading /> : null}
            <FormWrapper onSubmit={handleSubmit(onSubmit)}>
                {schema.map((group, index) => {
                    const parsedGroupName = group.name
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                        .replace(/º/g, "o")
                        .replace(/ª/g, "a")
                        .replace(/[´‘’]/g, "'")
                        .replace(/[^a-zA-Z0-9']/g, "-")
                        .replace(/-+/g, "-")
                        .toLowerCase();

                    return (
                        <GroupContainer key={index}>
                            <StyledHeading level="3">{group.name}</StyledHeading>
                            {
                                group.fields?.map((field, j) => {
                                    const { name, options, type: { id: type }, columns: { value: columns }, required, min, max } = field;

                                    const parsedName = name
                                        .normalize("NFD")
                                        .replace(/[\u0300-\u036f]/g, "")
                                        .replace(/º/g, "o")
                                        .replace(/ª/g, "a")
                                        .replace(/[´‘’]/g, "'")
                                        .replace(/[^a-zA-Z0-9']/g, "-")
                                        .replace(/-+/g, "-")
                                        .toLowerCase();

                                    if (type === 'footnotes') {
                                        return <StyledText type={field.variant} key={j}>{name}</StyledText>
                                    }

                                    if (type === 'fieldset') {
                                        return (
                                            <FormFieldset key={j}>
                                                {name ? <FieldsetLegend>{name}</FieldsetLegend> : null}
                                                {
                                                    field.fields?.map((innerField: FormFieldType, k: number) => {
                                                        const { name: nameFieldset, options: optionsFielset, type: { id: typeFieldset }, columns: { value: columnsFieldset }, required: requiredFieldset, min: minFieldset, max: maxFieldset } = innerField;

                                                        const parsedFieldsetName = nameFieldset
                                                            .normalize("NFD")
                                                            .replace(/[\u0300-\u036f]/g, "")
                                                            .replace(/º/g, "o")
                                                            .replace(/ª/g, "a")
                                                            .replace(/[´‘’]/g, "'")
                                                            .replace(/[^a-zA-Z0-9']/g, "-")
                                                            .replace(/-+/g, "-")
                                                            .toLowerCase();

                                                        return (
                                                            <Input
                                                                fieldName={nameFieldset}
                                                                valueName={`${parsedGroupName}.${parsedName}.${parsedFieldsetName}`}
                                                                type={typeFieldset}
                                                                columns={columnsFieldset}
                                                                isRequired={requiredFieldset ?? false}
                                                                error={!!(errors as Record<string, any>)?.[parsedGroupName]?.[parsedName]?.[parsedFieldsetName]}
                                                                options={optionsFielset}
                                                                registerCallback={register(`${parsedGroupName}.${parsedName}.${parsedFieldsetName}`, { required: requiredFieldset, min: Number(minFieldset), max: Number(maxFieldset) })}
                                                                key={k}
                                                            />
                                                        )
                                                    })
                                                }
                                            </FormFieldset>
                                        )
                                    };

                                    return (
                                        <Input
                                            fieldName={name}
                                            valueName={`${parsedGroupName}.${parsedName}`}
                                            type={type}
                                            columns={columns}
                                            isRequired={required ?? false}
                                            error={!!(errors[parsedGroupName] as Record<string, any>)?.[parsedName]}
                                            options={options}
                                            registerCallback={register(`${parsedGroupName}.${parsedName}`, { required: required, min: min ? Number(min) : undefined, max: max ? Number(max) : undefined })}
                                            key={j}
                                        />
                                    )
                                })
                            }
                        </GroupContainer>
                    )
                })}
                <SubmitButton
                    as={'input'}
                    type='submit'
                    value='Submeter'
                />
            </FormWrapper>
            {
                !!submitCount && !Object.entries(errors).length ? isSubmitSuccessful ?
                    <SuccessMessage>Submissão feita com sucesso!</SuccessMessage> :
                    <ErrorMessage>Ocorreu um erro na submissão. Tente novamente.</ErrorMessage>
                : null
            }
        </Container>
    )
}

export default SignUpForm;