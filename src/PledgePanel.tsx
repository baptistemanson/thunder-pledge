import React from "react";

function PledgePanel() {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 1,
        bottom: 0,
        left: 0,
        height: 120,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          height: 80,
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1))",
          bottom: 35,
          left: 0,
          width: "100%",
          zIndex: 1
        }}
      ></div>
      <div
        style={{
          height: 40,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          width: "100%",
          zIndex: 1
        }}
      >
        <div
          style={{
            cursor: "pointer",
            width: 100,
            textAlign: "center",
            height: "35px",
            backgroundColor: "#B8E986",
            zIndex: 1
          }}
        >
          Pledge
        </div>
      </div>
    </div>
  );
}

export default PledgePanel;
