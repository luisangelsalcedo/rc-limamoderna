import React from "react";
import PropTypes from "prop-types";

const HeaderTitle = ({ type, title, sub, children }) => (
  <div className={`header-${type}`}>
    {sub && <div className={`header-${type}__sub`}>{sub}</div>}
    <h1 className={`header-${type}__title`}>{title}</h1>
    {children && <div className={`header-${type}__details`}>{children}</div>}
  </div>
);

HeaderTitle.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  sub: PropTypes.string,
  children: PropTypes.node,
};

HeaderTitle.defaultProps = {
  type: "secundary",
  title: "title",
  sub: "",
  children: "",
};

export default HeaderTitle;
