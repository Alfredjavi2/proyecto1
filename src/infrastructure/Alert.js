import { toast } from "react-toastify";

const Alert = (function () {
  const info = (message) => toast.info(message);
  const success = (message) => toast.success(message);
  const error = (message) => toast.error(message);

  return {
    success,
    error,
    info,
  };
})();

export default Alert;
