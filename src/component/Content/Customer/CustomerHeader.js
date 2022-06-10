import React from "react";
import { BsArrowDown } from "react-icons/bs";
import image from "../../../assets/face.jpeg";

function CustomerHeader() {
  return (
    <div className="grid grid-cols-5 w-full">
      <div className="flex flex-col bg-white rounded-lg p-4 col-span-1 ml-1 mr-1">
        <h1>Total Clients</h1>
        <div className="w-full flex flex-row pt-10">
          <h1 className="text-2xl font-bold items-start ">124</h1>
          <BsArrowDown className="ml-24 mt-2 text-pink-600" />
          <h1 className="mt-1 text-pink-600">4%</h1>
        </div>
      </div>
      <div className="flex flex-col bg-white rounded-lg p-4 col-span-1 ml-1 mr-1">
        <h1>Members</h1>
        <div className="w-full flex flex-row pt-10">
          <h1 className="text-2xl font-bold items-start ">65</h1>

          <div className="h-2 w-2 rounded-full bg-green-600 mt-3 ml-6"></div>
          <h1 className="text-md font-bold items-start mt-1 ml-1">12</h1>
          <div className="h-2 w-2 rounded-full bg-gray-600 mt-3 ml-3"></div>
          <h1 className="text-md font-bold items-start mt-1 ml-1">13</h1>
          <div className="h-2 w-2 rounded-full bg-purple-600 mt-3 ml-3"></div>
          <h1 className="text-md font-bold items-start mt-1 ml-1">40</h1>
        </div>
      </div>
      <div className="flex flex-col bg-white rounded-lg p-4 col-span-1 ml-1 mr-1">
        <h1>New/Returning</h1>
        <div className="w-full flex flex-row pt-10">
          <h1 className="text-2xl font-bold items-start ">
            <span className="text-green-500">3</span>/24
          </h1>
        </div>
      </div>

      <div className="flex flex-col bg-white rounded-lg p-4 col-span-2 ml-1 mr-1">
        <h1>Active Members</h1>
        <div className="w-full flex flex-row pt-10">
          <h1 className="text-2xl font-semibold items-start ">9</h1>
          <h1 className="mt-2 ml-1">now</h1>
          <div className="ml-7 flex flex-row">
            <img
              src={image}
              alt="now"
              className="h-10 w-10  rounded-full bg-white p-1"
            />
            <img
              src={image}
              alt="now"
              className="h-10 w-10 rounded-full bg-white p-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerHeader;
