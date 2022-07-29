import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Play } from "../assets/svg/play-solid.svg";

const MainVideo = ({ url, preview }) => (
  <div className="video">
    <a href={url} data-fancybox>
      <i>
        <Play />
      </i>
      {preview && <img src={`img/${preview}`} alt="aa" />}
    </a>
  </div>
);

MainVideo.propTypes = {
  url: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
};

export default MainVideo;
