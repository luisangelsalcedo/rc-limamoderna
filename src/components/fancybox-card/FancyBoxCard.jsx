import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Search } from "./asset/svg/search-solid.svg";
import "./asset/sass/fancybox-card.scss";

const FancyBoxCard = ({ title, sub, src, gallery }) => (
  <div className="gallery-card">
    <a href={`img/${src}`} data-fancybox={gallery}>
      <i>
        <Search />
      </i>
    </a>
    <div className="gallery-card-header">
      <div className="gallery-card-header__title">{title}</div>
      <div className="gallery-card-header__sub">{sub}</div>
    </div>
    <img src={`img/${src}`} alt={`${sub}: ${title}`} />
  </div>
);

FancyBoxCard.propTypes = {
  title: PropTypes.string,
  sub: PropTypes.string,
  src: PropTypes.string.isRequired,
  gallery: PropTypes.string,
};

FancyBoxCard.defaultProps = {
  title: "",
  sub: "",
  gallery: "",
};

export default FancyBoxCard;
