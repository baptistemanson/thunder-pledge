import * as React from "react";
import SideBar from "./SideBar";

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
      <div style={{ textAlign: "center" }}>Thunder Pledge</div>
      <SideBar />
    </div>
  );
}

export default Title;
