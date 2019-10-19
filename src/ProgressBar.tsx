import React from "react";
function ProgressBar(props: any) {
  return (
    <div style={{ height: 10, borderRadius: 4, border: "1px solid #AAA" }}>
      <div
        style={{
          borderRadius: "inherit",
          transition: "width .2s ease-in",
          height: "100%",
          width: props.progress + "%",
          backgroundColor: "#B8E986"
        }}
      ></div>
    </div>
  );
}

export default ProgressBar;
