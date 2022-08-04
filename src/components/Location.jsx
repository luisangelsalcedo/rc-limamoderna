import React from "react";
import { PropTypes } from "prop-types";
import FancyBoxCard from "./FancyBoxCard";
// import { ReactComponent as Tools } from "../assets/svg/tools-solid.svg";

const Location = ({ map, status, district, price, offerprice, finish }) => (
  <div className="location">
    {map && <FancyBoxCard src={map} />}

    <div>
      {offerprice && district && (
        <>
          <div className="location__sub">MÚDATE A: </div>
          {/* <div className="location__title"></div> */}
          <h1>San Miguel</h1>
          <p>
            Uno de los más hermosos distritos de Lima Metropolitana y que en
            pocos meses se ha logrado transformar calles, avenidas, parques y
            plazas convirtiendo a San Miguel en un lugar preferido para vivir.
          </p>
        </>
      )}
    </div>

    {status && (
      <div className="location-district">
        {/* <i>
          <Tools />
        </i>
        <div className="location__title">{status}</div> */}
        <img src="./img/sanMiguel.jpg" alt="" />
      </div>
    )}
  </div>
);

Location.propTypes = {
  map: PropTypes.string,
  status: PropTypes.string,
  district: PropTypes.string,
  price: PropTypes.string,
  offerprice: PropTypes.string,
  finish: PropTypes.string,
};

Location.defaultProps = {
  map: "",
  status: "",
  district: "",
  price: "",
  offerprice: "",
  finish: "",
};

export default Location;
