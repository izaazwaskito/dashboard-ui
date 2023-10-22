import React from "react";
import { Category2 } from "iconsax-react";

const Dashboard = () => {
  return (
    <>
      <div
        className="col-md-12 d-flex ps-4 mt-3 p-2"
        style={{ borderRight: "3px solid #4EB7F2" }}
      >
        <div className="col-md-2">
          <Category2 size="32" color="#4eb7f2" variant="Bold" />
        </div>
        <div className="col-md-8 d-flex">
          <p
            className="my-auto font-bold text-2xl"
            style={{ color: "#4EB7F2" }}
          >
            Dashboard
          </p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
