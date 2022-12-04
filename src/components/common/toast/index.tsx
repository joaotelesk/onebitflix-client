import { Toast, ToastBody } from "reactstrap";

interface props {
  isOpen: boolean;
  message: string;
  color: string;
}

export default function ToastComponent({ message, color, isOpen }: props) {
  return (
    <>
      <Toast
        className={`${color} text-white fixed-top ms-auto mt-3`}
        isOpen={isOpen}
      >
        <ToastBody className="text-center">{message}</ToastBody>
      </Toast>
    </>
  );
}
