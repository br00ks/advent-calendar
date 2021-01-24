import React from "react";

/**
 * React component to display an image.
 */
export default function Image(props) {
  return (
    <div
      className={"d-flex align-items-center justify-content-center pt-5 pb-5"}
    >
      <img
        className="img-fluid modal-image"
        alt={""}
        src={"./images/" + props.data.data}
      />
    </div>
  );
}
