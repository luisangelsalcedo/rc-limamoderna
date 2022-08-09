import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as CloseIcon } from "./asset/svg/times-circle-regular.svg";

import "./asset/sass/modal.scss";

const Modal = ({ content, open, handler }) => (
  <div className={open ? `modal active` : `modal`}>
    {open && (
      <div className="modal-content">
        <button type="button" onClick={handler} className="modal-close">
          <CloseIcon />
        </button>
        {content}
      </div>
    )}
  </div>
);

Modal.propTypes = {
  content: PropTypes.node,
  open: PropTypes.bool,
  handler: PropTypes.func,
};

Modal.defaultProps = {
  content: "",
  open: false,
  handler: () => {},
};

export default Modal;
