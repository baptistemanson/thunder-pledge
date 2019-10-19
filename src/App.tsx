import React from "react";
import "./App.css";

import Title from "./Title";
import Cover from "./Cover";
import Description from "./Description";
import PledgePanel from "./PledgePanel";
function App() {
  return (
    <>
      <div
        id="page-wrap"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          zIndex: 0
        }}
      >
        <Title />
        <Cover />
        <Description />
        <PledgePanel />
      </div>
    </>
  );
}

export default App;
