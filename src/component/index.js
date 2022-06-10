import React, { useState } from "react";
import Sidenav from "./SideNavComponent/Sidenav";
import Content from "./Content/Content";
const Index = () => {
  const [activePage, setActivePage] = useState("Dashboard");
  return (
    <div className="h-screen grid grid-cols-custom-sidenav-layout">
      <Sidenav activePage={activePage} setActivePage={setActivePage} />
      <Content/>
    </div>
  );
};

export default Index;
