import React from "react";

import TheSidebar from "src/components/TheSidebar";
import TheHeader from "src/components/TheHeader";
import TheContent from "src/components/TheContent";
import TheFooter from "src/components/TheFooter";

import icons from "src/utils/icons";

React.icons = icons;

const Dashboard = () => {
  return (
    <>
      <div className="c-app c-default-layout">
        <TheSidebar />
        <div className="c-wrapper">
          <TheHeader />
          <div className="c-body">{/* <TheContent /> */}</div>
          <TheFooter />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
