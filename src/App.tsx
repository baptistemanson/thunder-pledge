import * as React from "react";
import { Router } from "@reach/router";
import ProjectPage from "./ProjectPage";
import ContactPage from "./ContactPage";
import AboutPage from "./AboutPage";
import LogoutPage from "./LogoutPage";

export default () => (
  <Router>
    <ProjectPage path="/" />
    <AboutPage path="/about" />
    <ContactPage path="/contact" />
    <LogoutPage path="/logout" />
  </Router>
);
