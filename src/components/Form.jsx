import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import data from "../data";
import Logo from "./Logo";
import FormResponse from "./FormResponse";
import SimpleInput from "./SimpleInput";
import useModal from "./modal/hook/useModal";

const Form = ({ logo, title, reference, children, labelbtn }) => {
  const { openModal } = useModal();

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

      {title && <h3 className="form__title">{title}</h3>}

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

        <input type="hidden" value={reference} name="entry.1424183869" />

        <div className="form__legal">
          <input type="checkbox" onChange={handleChange} checked={checkend} />
          Aceptas los{" "}
          <a
            href="#algo"
            onClick={() => openModal("Agregar aquí los términos y condiciones")}
          >
            Términos y Condiciones
          </a>
        </div>

        <button
          className="btn btn-block btn-secondary"
          type="submit"
          disabled={!checkend}
        >
          {labelbtn}
        </button>
      </form>

      <FormResponse show={complete} loading={loading} handler={handleClean}>
        {children}
      </FormResponse>
    </div>
  );
};

Form.propTypes = {
  logo: PropTypes.bool,
  title: PropTypes.string,
  reference: PropTypes.string,
  labelbtn: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Form.defaultProps = {
  logo: true,
  title: "CONSULTA POR LA PROMOCIÓN",
  reference: "default",
  labelbtn: "CONOCE MÁS",
};

export default Form;
