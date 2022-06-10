import React from 'react'
import SidenavHeader from './SidenavHeader';
import SidenavMenu from './SidenavMenu';
import SidenavFooter from './SidenavFooter';
const Sidenav = ({ activePage, setActivePage }) => (
    <div className="flex flex-col bg-whitesmoke text-black-300 px-4 py-4">
      <SidenavHeader />
      <SidenavMenu activePage={activePage} setActivePage={setActivePage} />
      <SidenavFooter />
    </div>
  );

export default Sidenav