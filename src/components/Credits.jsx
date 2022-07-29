import React from "react";
import PropTypes from "prop-types";

const Credits = ({ data }) => (
  <div className="credits">
    {data.map(({ title, src, details }) => (
      <div className="credits-item" key={src}>
        <div className="credits-item__title">{title}</div>
        <div className="credits-item__logo">
          <img src={`./img/${src}`} alt="" />
        </div>
        <div className="credits-item__details">{details}</div>
      </div>
    ))}
  </div>
);

Credits.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      details: PropTypes.string,
    })
  ),
};
Credits.defaultProps = {
  data: {},
};

export default Credits;
