import React from "react";

import Title from "./Title";
import { RouteComponentProps } from "@reach/router";
function ContactPage(props: RouteComponentProps) {
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
        <div>Contact</div>
      </div>
    </>
  );
}

export default ContactPage;
