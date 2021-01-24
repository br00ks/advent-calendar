import React from "react";
import Puzzle from "react-image-puzzle";

/**
 * React component to display an image puzzle game.
 */
export default function CalendarPuzzle(props) {
  return (
    <div className="d-flex align-items-center justify-content-center pt-5 pb-5">
      <Puzzle image={"./images/" + props.data.data} level={3} />
    </div>
  );
}
