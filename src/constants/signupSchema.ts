import * as Yup from 'yup';
import * as validationMessages from './validationMessages'

const signupValidationSchema = Yup.object({
    name: Yup.string()
    .required(validationMessages.NAME_REQUIRED)
    .min(5, validationMessages.NAME_MIN_LENGTH),
    email: Yup.string()
    .email(validationMessages.EMAIL_INVALID)
    .required(validationMessages.EMAIL_REQUIRED),
    password: Yup.string()
    .required(validationMessages.PASSWORD_REQUIRED)
    .min(8, validationMessages.PASSWORD_MIN_LENGTH)
    .matches(/[a-z]/, validationMessages.PASSWORD_LOWERCASE)
    .matches(/[A-Z]/, validationMessages.PASSWORD_UPPERCASE)
    .matches(/[0-9]/, validationMessages.PASSWORD_NUMBER)
    .matches(/[^\w]/, validationMessages.PASSWORD_SYMBOL),
    repassword: Yup.string().oneOf([Yup.ref('password'), null], validationMessages.PASSWORDS_MATCH)
    .required(validationMessages.CONFIRM_PASSWORD_REQUIRED),
});

export default signupValidationSchema;