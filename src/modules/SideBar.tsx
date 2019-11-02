import React from "react";
import { Auth0Context } from "../react-auth-spa";
import { Link } from "@reach/router";
import SideBarReact from "react-sidebar";

import Profile from "./Profile";
import AppContext from "../AppContext";

export default () => {
  const { isAuthenticated, loginWithRedirect, logout } = React.useContext(
    Auth0Context
  );
  const appContext = React.useContext(AppContext);
  return (
    <SideBarReact
      open={appContext.isPanelOpen}
      pullRight
      onSetOpen={appContext.setPanelOpen}
      sidebar={
        <div
          style={{
            backgroundColor: "white",
            height: "100vh",
            display: "flex",
            maxWidth: "80wh",
            flexDirection: "column",
            alignItems: "start",
            padding: 8
          }}
        >
          <Link to="/">Home</Link>
          {!isAuthenticated && (
            <a onClick={() => loginWithRedirect({})}>Log in</a>
          )}
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Profile />
          {isAuthenticated && <a onClick={() => logout()}>Log out</a>}
        </div>
      }
    >
      <div />
    </SideBarReact>
  );
};
