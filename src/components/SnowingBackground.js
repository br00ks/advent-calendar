import React from "react";
import Snowfall from "react-snowfall";

/**
 * A react component for the snowfall effect on the website.
 */
export default function SnowingBackground(props) {
  return (
    <>
      {props.snowfall.active ? (
        <div className={"snowfall-background"}>
          <Snowfall
            color={props.snowfall.color}
            snowflakeCount={props.snowfall.snowflakeCount}
          />
          {props.children}
        </div>
      ) : (
        <div>{props.children}</div>
      )}
    </>
  );
}
