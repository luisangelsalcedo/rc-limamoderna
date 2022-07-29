import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Check } from "../assets/svg/check-circle-solid.svg";
import { ReactComponent as Spiner } from "../assets/svg/circle-notch-solid.svg";

const FormResponse = ({ loading, complete, handler }) => (
  <div className="form__response">
    {loading && (
      <>
        <i className="spiner">
          <Spiner />
        </i>
        <p>Enviando...</p>
      </>
    )}
    {complete && (
      <p>
        <Check />
        Sus datos fueron enviados
        <br />
        <a href="#clean" id="resetform" onClick={handler}>
          Enviar otra respuesta
        </a>
      </p>
    )}
  </div>
);

FormResponse.propTypes = {
  loading: PropTypes.bool,
  complete: PropTypes.bool,
  handler: PropTypes.func,
};

FormResponse.defaultProps = {
  loading: false,
  complete: false,
  handler: () => {},
};

export default FormResponse;
