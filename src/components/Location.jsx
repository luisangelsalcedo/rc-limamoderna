import React from "react";
import { PropTypes } from "prop-types";
import FancyBoxCard from "./FancyBoxCard";
import { ReactComponent as Tools } from "../assets/svg/tools-solid.svg";

const Location = ({ map, status, district, price, offerprice, finish }) => (
  <div className="location">
    {map && <FancyBoxCard src={map} />}

    {status && (
      <div>
        <i>
          <Tools />
        </i>
        <div className="location__title">{status}</div>
      </div>
    )}

    <div>
      {offerprice && district && (
        <>
          <div className="location__sub">MÚDATE A {district} DESDE:</div>
          <div className="location__title">{offerprice}</div>
        </>
      )}

      {price && <div className="location__sub">Precio Normal: {price}</div>}
      {finish && (
        <>
          <div className="location__sub">ENTREGA</div>
          <div className="location__title">{finish}</div>
        </>
      )}
    </div>
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
