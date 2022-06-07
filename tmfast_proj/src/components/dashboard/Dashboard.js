import React from "react";
import Dropdown from "./Dropdown";
import dData from "../../dashboardData";
import Carousel from "./Carousel";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";

const Dashboard = () => {
  return (
    <>
      <Topbar />
      <main>
        <div className="main">
          <Sidebar />
          <div className="dashboard">
            <Carousel />
            <h2 className="section-dropdown-header">Existing Proposal</h2>
            <hr className="section-hr"></hr>
            {dData.map(item => {
              return <Dropdown key={item.id} dropdownItem={item} />;
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
