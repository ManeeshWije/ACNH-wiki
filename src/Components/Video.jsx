import React from "react";
import "../index.css"

function Video() {
  return (
    <div className="video-container">
      <video
        src={require("../assets/demo.mp4")}
        autoPlay
        muted
        loop
        id="demo"
      ></video>
    </div>
  );
}

export default Video;
