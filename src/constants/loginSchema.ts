import * as Yup from 'yup';
import {EMAIL_INVALID, EMAIL_REQUIRED, PASSWORD_REQUIRED} from './validationMessages'

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email(EMAIL_INVALID).required(EMAIL_REQUIRED),
  password: Yup.string().required(PASSWORD_REQUIRED),
});

export default loginValidationSchema;