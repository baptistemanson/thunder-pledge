import React, { useState, useContext } from "react";
import { navigate } from "@reach/router";
import { Mutation } from "urql";
import { Auth0Context } from "../react-auth-spa";
const mutation = `
mutation insertPledge($objects: [pledge_insert_input!]!) {
  __typename
  insert_pledge(objects: $objects, on_conflict: {constraint: pledge_user_project_key, update_columns: project}) {
    returning {
      id
    }
  }
}`;

function PledgePanel(props: any) {
  const context = useContext(Auth0Context);
  const [errors, setErrors] = useState(null) as any;
  if (errors) {
    return <div>{JSON.stringify(errors)}</div>;
  }

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 1,
        bottom: 0,
        left: 0,
        height: 120,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          height: 80,
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1))",
          bottom: 35,
          left: 0,
          width: "100%",
          zIndex: 1
        }}
      ></div>
      <div
        style={{
          height: 40,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          width: "100%",
          zIndex: 1
        }}
      >
        <div
          onClick={async () => {
            try {
              if (!context.user) {
                context.loginWithRedirect({});
              }
              await props.pledge({
                objects: [{ project: props.projectId, user: context.user.id }]
              });
              navigate("/done");
            } catch (e) {
              console.error(e);
              setErrors(e);
            }
          }}
          style={{
            cursor: "pointer",
            width: 100,
            textAlign: "center",
            height: "35px",
            backgroundColor: "#B8E986",
            zIndex: 1
          }}
        >
          Pledge
        </div>
      </div>
    </div>
  );
}

const WithMutation = (props: any) => (
  <Mutation query={mutation}>
    {({ executeMutation }) => (
      <PledgePanel projectId={props.projectId} pledge={executeMutation} />
    )}
  </Mutation>
);
export default WithMutation;
