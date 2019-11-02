import React from "react";
import Title from "../modules/Title";
import Cover from "../modules/Cover";
import Description from "../modules/Description";
import PledgePanel from "../modules/PledgePanel";
// import { RouteComponentProps } from "@reach/router";

import { Query } from "urql";

const getProject = `
query GetProject {
  project_by_pk(id: 1) {
    pledges_target
    name
    description
    pledges_aggregate {
      aggregate {
        count
      }
    }
  }
}
`;

function ProjectPage(props: any) {
  return (
    <Query query={getProject}>
      {({ fetching, data, error }) => {
        if (fetching) return <div>Loading</div>;
        if (error) return <div>Oops</div>;
        return (
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
                name={data.project_by_pk.name}
                description={data.project_by_pk.description}
                pledgesNumber={
                  data.project_by_pk.pledges_aggregate.aggregate.count | 0
                }
                pledgesTarget={data.project_by_pk.pledges_target | 0}
              />
              <PledgePanel projectId={props.projectId} />
            </div>
          </>
        );
      }}
    </Query>
  );
}

export default ProjectPage;
