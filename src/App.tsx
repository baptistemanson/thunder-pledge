import * as React from "react";
import Auth0Provider from "./react-auth-spa";
import SideBar from "./modules/SideBar";
import { Provider, Mutation } from "urql";
import clientGQL from "./pages/clientGQL";
import RouterApp from "./Router";
import AppContext from "./AppContext";

const config = {
  domain: "thunder-pledge.auth0.com",
  clientId: "A2qhOcbLHydOdU1MpgNRU3nB40g79dPN"
};
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

export default () => {
  const [isPanelOpen, setPanelOpen] = React.useState(false);
  return (
    <Auth0Provider
      domain={config.domain}
      client_id={config.clientId}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <AppContext.Provider value={{ isPanelOpen, setPanelOpen }}>
        <Provider value={clientGQL}>
          <WithMutations />
        </Provider>
      </AppContext.Provider>
    </Auth0Provider>
  );
};
