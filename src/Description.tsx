import React from "react";
import ProgressBar from "./ProgressBar";

function Description() {
  return (
    <div style={{ backgroundColor: "white", padding: 8 }}>
      <h1 style={{ fontSize: 20, padding: "0px", margin: 8 }}>
        Stop eating beef for climate reasons
      </h1>
      <div>
        <ProgressBar progress="80" />
        <div style={{ margin: 4 }}>
          <span style={{ color: "#B8E986", fontSize: 16 }}>800,042</span> out of
          1M
        </div>
      </div>
      <div
        style={{
          marginTop: 4
        }}
      >
        If Americans made only the dietary change to eat beans instead of beef,
        we will would be 40-70% of the way to our carbon emission goals. This
        only is effective if we do it en masse. Pledge to stop eating beef, but
        only do so if 1M other people do! Join the movement! If Americans made
        only the dietary change to eat beans instead of beef, we will would be
        40-70% of the way to our carbon emission goals. This only is effective
        if we do it en masse. Pledge to stop eating beef, but only do so if 1M
        other people do! Join the movement!
      </div>
    </div>
  );
}

export default Description;
