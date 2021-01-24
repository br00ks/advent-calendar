import React from "react";

/**
 * React component to display text.
 */
export default function Text(props) {
  return (
    <div>
      <div className={"mt-2 mb-2 pl-2 pr-2 quoteBox"}>{props.data.data}</div>
    </div>
  );
}
