import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth-spa";

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  } else if (!user) {
    return null;
  }

  return (
    <Fragment>
      <p>logged as {user.name}</p>
      <img src={user.picture} alt="Profile" />
    </Fragment>
  );
};

export default Profile;
