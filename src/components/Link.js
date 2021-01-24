import React from "react";
import {ReactTinyLink} from "react-tiny-link";

/**
 * React component to display a react tiny link.
 */
export default function Link(props) {
  return (
    <div
      className={"d-flex align-items-center justify-content-center pt-5 pb-5"}
    >
      <ReactTinyLink
        cardSize="small"
        showGraphic={true}
        maxLine={2}
        minLine={1}
        url={props.data.data}
      />
    </div>
  );
}
