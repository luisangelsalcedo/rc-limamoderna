import React from "react";
import PropTypes from "prop-types";

const Icon = ({ fa }) => <i className={`fa fa-${fa}`} />;

Icon.propTypes = {
  fa: PropTypes.string.isRequired,
};

export default Icon;
