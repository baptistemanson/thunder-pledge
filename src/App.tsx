import * as React from "react";
import { Router } from "@reach/router";
import ProjectPage from "./ProjectPage";
import ContactPage from "./ContactPage";
import AboutPage from "./AboutPage";
import LogoutPage from "./LogoutPage";
import Auth0Provider from "./react-auth-spa";

import config from "./auth_config.json";

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

export default () => (
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <Router>
      <ProjectPage path="/" />
      <AboutPage path="/about" />
      <ContactPage path="/contact" />
      <LogoutPage path="/logout" />
    </Router>
  </Auth0Provider>
);
