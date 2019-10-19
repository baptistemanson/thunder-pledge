import React, { Fragment } from "react";
import { useAuth0 } from "./react-auth-spa";

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  } else if (!user) {
    return null;
  }

  return (
    <Fragment>
      <img src={user.picture} alt="Profile" />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </Fragment>
  );
};

export default Profile;
