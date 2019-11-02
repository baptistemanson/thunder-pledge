import * as React from "react";
import { Router } from "@reach/router";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./AboutPage";
import LogoutPage from "./pages/LogoutPage";
import PledgeDonePage from "./pages/PledgeDonePage";
import { Auth0Context } from "./react-auth-spa";

export default class RouterApp extends React.Component<any> {
  static contextType = Auth0Context;
  state = { hasQueried: false };
  componentDidUpdate() {
    if (
      !this.state.hasQueried &&
      !this.props.fetching &&
      this.props.createUser &&
      this.context.user
    ) {
      this.props.createUser({
        objects: [
          {
            first_name: this.context.user.given_name,
            last_name: this.context.user.family_name,
            fb_email: this.context.user.email
          }
        ]
      });
      this.setState({ hasQueried: true });
    }
    if (this.props.data && !this.context.user.id) {
      // @todo only change it when required...
      this.context.updateUser(this.props.data.insert_user.returning[0].id);
    }
  }
  render() {
    return (
      <Router>
        <ProjectPage path="/" />
        <AboutPage path="/about" />
        <ContactPage path="/contact" />
        <LogoutPage path="/logout" />
        <PledgeDonePage path="/done" />
      </Router>
    );
  }
}
