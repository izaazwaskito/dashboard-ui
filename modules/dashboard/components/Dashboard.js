import React, { useEffect } from "react";
import AccountBalance from "./AccountBalance";
import QuickInvoice from "./QuickInvoice";
import CardHistory from "./CardHistory";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

const Dashboard = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        className="col-md-7 h-screen"
        data-aos="fade-up"
        data-aos-duration="2000"
        style={{ backgroundColor: "#f7f9fa" }}
      >
        <AccountBalance />
        <QuickInvoice />
      </div>
      <div
        className="col-md-3"
        data-aos="fade-left"
        data-aos-duration="2000"
        style={{ backgroundColor: "#f7f9fa" }}
      >
        <CardHistory />
      </div>
    </>
  );
};

export default Dashboard;
