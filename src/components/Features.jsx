import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Check } from "../assets/svg/check-solid.svg";

const Features = ({ data }) => (
  <div className="features-list">
    {data.map((feat) => (
      <div className="features-list__item" key={feat}>
        <i>
          <Check />
        </i>
        <span>{feat}</span>
      </div>
    ))}
  </div>
);

Features.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
};

Features.defaultProps = {
  data: [],
};
export default Features;
