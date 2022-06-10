import React from "react";
import { RiAdminFill } from "react-icons/ri";
import {GrUserAdmin} from 'react-icons/gr'
import ProgressBar from "./ProgressBar";

const SidenavFooter = () => (
  <div className="flex flex-col items-center mt-auto p-2 h-auto w-auto  text-black-500 bt-2 border-black-200 opacity-100">
    <div className="flex">
      <div className="p-5">
        <RiAdminFill className="opacity-100" />
      </div>
      <div>
        <h1>Nishchay Bhatt</h1>
        <h4 className="text-sm text-gray-500">Admin</h4>
      </div>
    </div>
    <div className="flex w-full ">
      <h1 className="content-start mr-9">Todays class</h1>
      <h4 className="text-base text-gray-800 ml-14">7</h4>
    </div>
    <div className="flex w-full ">
      <h1 className="content-start">Booked Appointments</h1>
      <h4 className="text-base text-orange-500 ml-3">85%</h4>
    </div>
    <ProgressBar progressPercentage={85} />
    <button className="flex mt-2 items-center p-1 text-orange-500 border-2 border-orange-200">
        <GrUserAdmin className="mr-2"/> Edit Account
    </button>
  </div>
);

export default SidenavFooter;
