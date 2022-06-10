import React from 'react'
import NavItem from './NavItem';
import {HiChartPie} from 'react-icons/hi'
import {FiUsers} from 'react-icons/fi'
import {BsFillCreditCard2BackFill} from 'react-icons/bs'
import {AiOutlineCalendar} from 'react-icons/ai'
import {BsFillFileEarmarkBarGraphFill} from 'react-icons/bs'
import {FaCog} from 'react-icons/fa'
const SidenavMenu = ({ activePage, setActivePage }) => (
    <nav className="space-y-1">
      <NavItem activePage={activePage} link="Dashboard"  svgIcon={<HiChartPie />} title="Dashboard" setActivePage={setActivePage} />
      <NavItem activePage={activePage} link="Appointments"  svgIcon={<AiOutlineCalendar />} title="Appointments" setActivePage={setActivePage} />
      <NavItem activePage={activePage} link="Customer"  svgIcon={<FiUsers />} title="Customer" setActivePage={setActivePage} />
      <NavItem activePage={activePage} link="Finances"  svgIcon={<BsFillCreditCard2BackFill />} title="Finances" setActivePage={setActivePage} />
      <NavItem activePage={activePage} link="Report"  svgIcon={<BsFillFileEarmarkBarGraphFill />} title="Report" setActivePage={setActivePage} />
      <NavItem activePage={activePage} link="Setting"  svgIcon={<FaCog />} title="Setting" setActivePage={setActivePage} />
    </nav>
  );

export default SidenavMenu