import React from "react";

const Container = ({ children }) => {
  return (
    <>
      <div className="row w-screen">{children}</div>
    </>
  );
};

export default Container;
