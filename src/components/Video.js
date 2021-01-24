import React from "react";
import ReactPlayer from "react-player/youtube";

/**
 * React component to display a video.
 */
export default function Video(props) {
  return (
    <div
      className={"d-flex align-items-center justify-content-center pt-5 pb-5"}
    >
      <ReactPlayer url={props.data.data} />
    </div>
  );
}
