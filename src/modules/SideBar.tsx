import React from "react";
import { Auth0Context } from "../react-auth-spa";
import { Link } from "@reach/router";
import SideBarReact from "react-sidebar";

import Profile from "./Profile";

export default class SideBar extends React.Component {
  static contextType = Auth0Context;
  showSettings(event: any) {
    event.preventDefault();
  }

  render() {
    const { isAuthenticated, loginWithRedirect, logout } = this.context;
    return (
      <SideBarReact
        sidebar={
          <>
            <Profile />
            <Link to="/">Home</Link>
            {!isAuthenticated && (
              <div onClick={() => loginWithRedirect({})}>Log in</div>
            )}
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            {isAuthenticated && <div onClick={() => logout()}>Log out</div>}
          </>
        }
      ></SideBarReact>
    );
  }
}
