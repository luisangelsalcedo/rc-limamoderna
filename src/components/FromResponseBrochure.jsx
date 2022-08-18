import React from "react";
import { ReactComponent as Brochure } from "../assets/svg/newspaper-solid.svg";

const FromResponseBrochure = () => {
  const openBrochure = () => {
    window.open("./pdf/valente2-brochure.pdf");
  };
  return (
    <p>
      <Brochure />
      Descarga el brochure en el siguiente enlace
      <br />
      <br />
      <button
        className="btn btn-block btn-primary"
        type="button"
        onClick={openBrochure}
      >
        DESCARGAR
      </button>
    </p>
  );
};

export default FromResponseBrochure;
