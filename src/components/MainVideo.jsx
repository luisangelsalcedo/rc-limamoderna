import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Play } from "../assets/svg/play-solid.svg";
import Logo from "./Logo";

const MainVideo = ({ url, preview, title }) => (
  <>
    <div className="video-title">
      <Logo />
      {title && <h1>{title}</h1>}
    </div>
    <div className="video">
      <a href={url} data-fancybox>
        <i>
          <Play />
        </i>
        {preview && <img src={`img/${preview}`} alt="aa" />}
      </a>
    </div>
  </>
);

MainVideo.propTypes = {
  url: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  title: PropTypes.string,
};

MainVideo.defaultProps = {
  title: "",
};

export default MainVideo;
