import React from "react";



const NavItem = ({ activePage, link, svgIcon, title, setActivePage }) => (
  <a
    onClick={() => setActivePage(title)}
    href={link}
    className={`flex items-center no-underline text-black-300 hover:text-black-100 p-3 rounded-md ${
      activePage === title ? "bg-whitesmoke text-orange-500" : ""
    }`}
  >
    {svgIcon}
    <div className="font-bold pl-3">{title}</div>
  </a>
);

export default NavItem;
