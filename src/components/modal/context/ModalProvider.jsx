import React, { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import Modal from "../Modal";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");

  const openModal = (node) => {
    setOpen(true);
    setContent(node);
  };
  const closeModal = () => {
    setOpen(false);
    setContent("");
  };

  const valueMemo = useMemo(
    () => ({
      openModal,
      closeModal,
    }),
    []
  );

  return (
    <ModalContext.Provider value={valueMemo}>
      <Modal open={open} content={content} handler={closeModal} />
      {children}
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ModalProvider, ModalContext };
