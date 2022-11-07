import { toast, ToastOptions } from "react-toastify";

export enum MessageType {
  "success",
  "error",
  "default",
}

export const showMessage = (type: MessageType, message: string) => {
  const toastSettings: ToastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  if (type === MessageType.success) {
    toast.success(message, toastSettings);
  } else if (type === MessageType.error) {
    toast.error(message, toastSettings);
  } else {
    toast(message, toastSettings);
  }
};
