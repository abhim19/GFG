import React from "react";
import { useParams } from "react-router";

const Profile = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>Profile - {name}</h1>
    </div>
  );
};

export default Profile;
