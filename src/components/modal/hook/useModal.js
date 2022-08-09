import { useContext } from "react";
import { ModalContext } from "../context/ModalProvider";

const useModal = () => {
  const valueContext = useContext(ModalContext);
  return valueContext;
};

export default useModal;
