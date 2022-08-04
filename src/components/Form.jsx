import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import data from "../data";
import Logo from "./Logo";
import FormResponse from "./FormResponse";
import SimpleInput from "./SimpleInput";

const Form = ({ logo, title }) => {
  const [checkend, setCheckend] = useState(true);
  const [loading, setLoading] = useState(false);
  const [complete, setComplete] = useState(false);

  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const formRef = useRef();

  const handleChange = () => {
    setCheckend((c) => !c);
  };

  const handleClean = () => {
    formRef.current.style.display = "block";
    nameRef.current.value = "";
    phoneRef.current.value = "";
    emailRef.current.value = "";
    setComplete(false);
  };

  const handleSubmit = () => {
    formRef.current.style.display = "none";

    setLoading(true);

    const time = setTimeout(() => {
      setLoading(false);
      setComplete(true);
      clearTimeout(time);
    }, 2000);
  };

  const { action } = data.form;

  return (
    <div className="form">
      {logo && <Logo />}

      <h3 className="form__title">{title}</h3>

      <iframe
        title="iframe-hidden"
        className="iframe-hidden"
        id="iframe-hidden"
        name="iframe-hidden"
      />

      <form
        ref={formRef}
        action={action}
        method="post"
        target="iframe-hidden"
        className="form__content"
        onSubmit={handleSubmit}
      >
        <SimpleInput
          ref={nameRef}
          type="text"
          required
          placeholder="Nombre y apellido"
          name="entry.520986562"
        />

        <SimpleInput
          ref={phoneRef}
          type="text"
          required
          placeholder="Celular"
          name="entry.1096430527"
        />

        <SimpleInput
          ref={emailRef}
          type="email"
          required
          placeholder="Correo electrónico"
          name="entry.2018751719"
        />

        <div className="form__legal">
          <input type="checkbox" onChange={handleChange} checked={checkend} />
          Aceptas los <a href="#algo">Términos y Condiciones</a>
        </div>

        <button
          className="btn btn-block btn-secondary"
          type="submit"
          disabled={!checkend}
        >
          CONOCE MÁS
        </button>
      </form>

      <FormResponse
        complete={complete}
        loading={loading}
        handler={handleClean}
      />
    </div>
  );
};

Form.propTypes = {
  logo: PropTypes.bool,
  title: PropTypes.string,
};

Form.defaultProps = {
  logo: false,
  title: "CONSULTA POR LA PROMOCIÓN",
};

export default Form;
