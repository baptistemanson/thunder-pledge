import React from "react";

import Title from "./../modules/Title";
import { RouteComponentProps } from "@reach/router";
function AboutPage(props: RouteComponentProps) {
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
        <div>About</div>
      </div>
    </>
  );
}

export default AboutPage;
