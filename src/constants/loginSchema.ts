import * as Yup from 'yup';
import * as validationMessages from './validationMessages'

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email(validationMessages.EMAIL_INVALID).required(validationMessages.EMAIL_REQUIRED),
  password: Yup.string().required(validationMessages.PASSWORD_REQUIRED),
});

export default loginValidationSchema;