import { ReactNode } from "react";
import { ReactComponent as CloseIcon } from "../assets/close.svg";

type Props = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  children?: ReactNode;
  classes?: string;
};

function Modal({ children, setShowModal, classes }: Props) {
  return (
    <div className="w-screen h-screen fixed -mx-12 animate-fadeIn flex flex-col justify-center items-center bg-black/50">
      <CloseIcon
        className="absolute right-5 top-5 w-4 h-4 text-white/50 cursor-pointer hover:text-white/80"
        onClick={() => setShowModal(false)}
      />
      <div className={`flex flex-col p-8 text-[#1e1e1e] w-[85vw] h-[85vh] bg-white/90 rounded-2xl ${classes}`}>{children}</div>
    </div>
  );
}

export default Modal;
