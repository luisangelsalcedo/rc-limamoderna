import React from "react";
import PropTypes from "prop-types";

const SectionComponent = ({ children, auto, index, bg }) => (
  <div
    className={
      auto
        ? `section section${index} fp-auto-height`
        : `section section${index}`
    }
    style={bg ? { backgroundImage: `url(${bg})` } : {}}
  >
    <div className="container">{children}</div>
  </div>
);

SectionComponent.propTypes = {
  auto: PropTypes.bool,
  index: PropTypes.string.isRequired,
  bg: PropTypes.string,
  children: PropTypes.node,
};

SectionComponent.defaultProps = {
  auto: false,
  children: "contenido",
  bg: "",
};

export default SectionComponent;
