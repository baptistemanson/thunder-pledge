import * as React from "react";
import imgSrc from "./../logo.png";
import menuSrc from "./../menu.svg";
import AppContext from "./../AppContext";
function Title() {
  const appContext = React.useContext(AppContext);
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
      <img
        alt="logo"
        src={menuSrc}
        style={{ width: 22, position: "absolute", right: 16, top: 16 }}
        onClick={e => appContext.setPanelOpen(true)}
      />
    </div>
  );
}

export default Title;
