import * as React from "react";
import imgSrc from "./logo.png";
function Title() {
  return (
    <div
      style={{
        backgroundColor: "white",
        zIndex: 1,
        minHeight: "60px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 4px 0 rgba(0,0,0,0.50)"
      }}
    >
      <div style={{ textAlign: "center" }}>
        <img alt="logo" src={imgSrc} style={{ width: 180 }} />
      </div>
    </div>
  );
}

export default Title;
