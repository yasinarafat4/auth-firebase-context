import React from "react";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2>Home</h2>
      <p>Name: {user && <span>{user.displayName}</span>}</p>
    </div>
  );
};

export default Home;
