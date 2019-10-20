import React from "react";
import "./App.css";
import _ from "lodash";
import Title from "./Title";
import Cover from "./Cover";
import Description from "./Description";
import PledgePanel from "./PledgePanel";
import { RouteComponentProps } from "@reach/router";

import { Query } from "urql";

const getProject = `
query GetProject {
  project_by_pk(id: 1) {
    pledges_target
    pledges_aggregate {
      aggregate {
        count
      }
    }
  }
}
`;

const extractPledgesNumber = (data: any) =>
  _.get(data, "project_by_pk.pledges_aggregate.aggregate.count");

const extractPledgesTarget = (data: any) =>
  _.get(data, "project_by_pk.pledges_target");

function ProjectPage(props: RouteComponentProps) {
  const projectId = 1;

  return (
    <Query query={getProject}>
      {({ fetching, data, error, extensions }) => (
        <>
          <div
            id="page-wrap"
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100vh",
              zIndex: 0
            }}
          >
            <Title />
            <Cover />
            <Description
              pledgesNumber={extractPledgesNumber(data) | 0}
              pledgesTarget={extractPledgesTarget(data) | 0}
            />
            <PledgePanel projectId={1} />
          </div>
        </>
      )}
    </Query>
  );
}

export default ProjectPage;
