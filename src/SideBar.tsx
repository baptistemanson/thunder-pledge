import React from "react";

import { slide as Menu } from "react-burger-menu";
import { Link } from "@reach/router";
export default class OurMenu extends React.Component {
  showSettings(event: any) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu right>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/logout">Logout</Link>
      </Menu>
    );
  }
}
