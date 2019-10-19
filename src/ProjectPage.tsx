import React from "react";
import "./App.css";

import Title from "./Title";
import Cover from "./Cover";
import Description from "./Description";
import PledgePanel from "./PledgePanel";
import { RouteComponentProps } from "@reach/router";
function ProjectPage(props: RouteComponentProps) {
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

export default ProjectPage;
