import * as React from "react";
import Auth0Provider from "./react-auth-spa";
import SideBar from "./modules/SideBar";
import config from "./auth_config.json";
import { Provider, Mutation } from "urql";
import clientGQL from "./pages/clientGQL";
import RouterApp from "./Router";

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

const WithMutations = () => (
  <Mutation query={createUserGQL}>
    {({ executeMutation, data }) => (
      <>
        <RouterApp createUser={executeMutation} data={data} />
        <SideBar />
      </>
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
