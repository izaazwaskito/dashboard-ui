import React from "react";
import Logo from "./Logo";
import Profile from "./Profile";
import Dashboard from "./Dashboard";

const index = () => {
  return (
    <>
      <div className="col-md-2 h-screen ">
        <div className="row">
          <Logo />
          <Profile />
          <Dashboard />
        </div>
      </div>
    </>
  );
};

export default index;
