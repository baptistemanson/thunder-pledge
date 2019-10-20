import * as React from "react";
import { Router } from "@reach/router";
import ProjectPage from "./ProjectPage";
import ContactPage from "./ContactPage";
import AboutPage from "./AboutPage";
import LogoutPage from "./LogoutPage";
import PledgeDonePage from "./PledgeDonePage";
import Auth0Provider, { Auth0Context } from "./react-auth-spa";

import config from "./auth_config.json";

import { Provider, Mutation } from "urql";
import clientGQL from "./clientGQL";

// A function that routes the user to the right place
// after login
const onRedirectCallback = (appState: any) => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

const createUserGQL = `
mutation insertUser($objects: [user_insert_input!]!) {
  __typename
  insert_user(objects:$objects, on_conflict: {constraint: user_fb_email_key, update_columns: [first_name, last_name]}) {
    returning {
      id
    }
  }
}
`;

class RouterApp extends React.Component<any> {
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
      console.log(this.context.user);
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
const WithMutations = () => (
  <Mutation query={createUserGQL}>
    {({ executeMutation, data }) => (
      <RouterApp createUser={executeMutation} data={data} />
    )}
  </Mutation>
);

export default () => (
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <Provider value={clientGQL}>
      <WithMutations />
    </Provider>
  </Auth0Provider>
);
