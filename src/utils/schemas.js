import * as yup from 'yup';

export const loginSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(8, "min de 8 caractere").max(40, "maximo 40 caracteres").required()
})