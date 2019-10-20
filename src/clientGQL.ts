import { createClient } from "urql";

export default createClient({
  url: "https://thunder-pledge.herokuapp.com/v1/graphql",
  fetchOptions: { headers: { "x-hasura-admin-secret": "thunderpledge" } }
});
