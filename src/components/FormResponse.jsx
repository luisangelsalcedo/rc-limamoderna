import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as Spiner } from "../assets/svg/circle-notch-solid.svg";

const FormResponse = ({ loading, show, children }) => (
  <div className="form__response">
    {loading && (
      <>
        <i className="spiner">
          <Spiner />
        </i>
        <p>Enviando...</p>
      </>
    )}
    {show && children}
  </div>
);

FormResponse.propTypes = {
  loading: PropTypes.bool,
  show: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

FormResponse.defaultProps = {
  loading: false,
  show: false,
};

export default FormResponse;
