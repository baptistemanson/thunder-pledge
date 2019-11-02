import React from "react";
import ProgressBar from "./ProgressBar";

function Description(props: any) {
  return (
    <div style={{ backgroundColor: "white", padding: 8 }}>
      <h1 style={{ fontSize: 20, padding: "0px", margin: 8 }}>{props.name}</h1>
      <div>
        <ProgressBar
          progress={(props.pledgesNumber / props.pledgesTarget) * 100}
        />
        <div style={{ margin: 4 }}>
          <span style={{ color: "#B8E986", fontSize: 16 }}>
            {props.pledgesNumber.toLocaleString()}
          </span>{" "}
          out of {props.pledgesTarget.toLocaleString()}
        </div>
      </div>
      <div
        style={{
          marginTop: 4
        }}
      >
        {props.description}
      </div>
    </div>
  );
}

export default Description;
