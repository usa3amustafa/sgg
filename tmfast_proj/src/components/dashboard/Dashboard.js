import React from "react";
import Dropdown from "./Dropdown";
import dData from "../../dashboardData";
import Carousel from "./Carousel";

const Dashboard = () => {
  return (
    <>
      <Carousel />
      <div className="dashboard-card-header">
        <h2>Existing Proposal</h2>
        <br></br>
        <hr className="dropdown-hr"></hr>
      </div>
      {dData.map(item => {
        return <Dropdown key={item.id} dropdownItem={item} />;
      })}
    </>
  );
};

export default Dashboard;
