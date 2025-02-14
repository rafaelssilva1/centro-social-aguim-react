import axios from "axios";

import { FormData as FormDataType } from "./types";

const findValidEmailInData = (data: FormDataType): string => {
    for (const key in data) {
        const value = data[key];

        if (typeof value === "object" && value !== null && "email" in value) {
            return String(value.email);
        }
    }

    return '';
}

const submitForm = ({data, token, subject = ''}: {data: FormDataType, token?: string, subject: string}) => {
        data['origem-do-pedido'] = window.location.href;

        let email = data['email'] ?? data['Email'];;
        if(!email) {
            email = findValidEmailInData(data);
        }

        const formData = new FormData();
        formData.append('email', String(email));
        formData.append('subject', subject);
        formData.append('token', String(token));
        formData.append('data', JSON.stringify(data));

        // handle file upload
        for (const key in data['documentos']) {
            const element = data['documentos'][key];

            if(!!element[0]) {
                formData.append(key, element[0]);
            }
        }

        if(!email || !token) return;

        const req = axios.post(
            `https://backoffice.centrosocialodeaguim.pt/wp-json/aguim/v1/forms`,
            formData
        )

        return req;
}

export default submitForm;