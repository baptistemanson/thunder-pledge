import React from "react";

import Title from "./Title";
import { RouteComponentProps, Link } from "@reach/router";
function LogoutPage(props: RouteComponentProps) {
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
        <div>You've been logged out</div>
        <Link to="/">Go back to the homepage</Link>
      </div>
    </>
  );
}

export default LogoutPage;
