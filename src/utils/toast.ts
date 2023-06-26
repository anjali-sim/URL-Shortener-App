import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// for specifying the type of the toast message 
type ToastMessage = string;

export const errorMessage = "Invalid Username or Password!!!";
export const emailErrorMessage = "Email is already registered!!!";
export const successMessage = "Password reset email sent successfully!!!";

// for showing error toast notification
export const showErrorToast = (message: ToastMessage) => {
  toast.error(message, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

// for showing success toast notification
export const showSuccessToast = (message: ToastMessage) => {
  toast.success(message, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
