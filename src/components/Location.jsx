import React from "react";
import { PropTypes } from "prop-types";
import FancyBoxCard from "./fancybox-card/FancyBoxCard";
// import { ReactComponent as Tools } from "../assets/svg/tools-solid.svg";

const Location = ({ map, district }) => (
  <div className="location">
    {map && <FancyBoxCard src={map} />}

    <div>
      {district && (
        <>
          <div className="location__sub">MÚDATE A: </div>
          <h1>San Miguel</h1>
          <p>
            Uno de los más hermosos distritos de Lima Metropolitana y que en
            pocos meses se ha logrado transformar calles, avenidas, parques y
            plazas convirtiendo a San Miguel en un lugar preferido para vivir.
          </p>
        </>
      )}
    </div>
  </div>
);

Location.propTypes = {
  map: PropTypes.string,
  district: PropTypes.string,
};

Location.defaultProps = {
  map: "",
  district: "",
};

export default Location;
