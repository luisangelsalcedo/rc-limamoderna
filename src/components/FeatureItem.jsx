import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Check } from "../assets/svg/check-solid.svg";

const FeatureItem = ({ label, icon }) => (
  <div className="features-list__item">
    <i>{icon || <Check />}</i>
    <span>{label}</span>
  </div>
);

FeatureItem.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.node,
};

FeatureItem.defaultProps = {
  label: "",
  icon: "",
};

export default FeatureItem;
