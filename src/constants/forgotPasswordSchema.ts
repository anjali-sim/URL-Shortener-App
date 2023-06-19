import * as Yup from "yup";
import {
  EMAIL_INVALID,
  EMAIL_REQUIRED,
} from "./validationMessages";

const forgotPasswordValidationSchema = Yup.object().shape({
  email: Yup.string().email(EMAIL_INVALID).required(EMAIL_REQUIRED),
});

export default forgotPasswordValidationSchema;
