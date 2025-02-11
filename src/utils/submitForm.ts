import axios from "axios";

import { FormData } from "./types";

const submitForm = ({data, token, subject = ''}: {data: FormData, token?: string, subject: string}) => {
        data['Página de contacto'] = window.location.href;

        const email = data['email'] ?? data['Email'];

        if(!email || !token) return;

        const req = axios.post(
            `${import.meta.env.VITE_REQUEST_URL}/forms`,
            {
                email,
                subject,
                token,
                data
            }
        )

        return req;
}

export default submitForm;