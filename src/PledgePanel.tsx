import React from "react";

function PledgePanel() {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 1,
        bottom: 0,
        left: 0,
        height: 40,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white"
      }}
    >
      <div
        style={{
          cursor: "pointer",
          width: 100,
          textAlign: "center",
          height: "35px",
          backgroundColor: "#B8E986"
        }}
      >
        Pledge
      </div>
    </div>
  );
}

export default PledgePanel;
