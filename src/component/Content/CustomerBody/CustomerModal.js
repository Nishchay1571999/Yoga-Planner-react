import React, { useState } from "react";
import image from "../../../assets/face.jpeg";

function CustomerModal({ visible, setvisible }) {
  const [overview, setOverview] = useState(true);
  const [appointments, setAppointment] = useState(false);
  const [vistits, setVisits] = useState(false);
  const [transactions, setTransactions] = useState(false);
  const [membership, setMembership] = useState(false);
  const setoverview = () => {
    setOverview(true);
    setAppointment(false);
    setVisits(false);
    setTransactions(false);
    setMembership(false);
  };
  const setappointments = () => {
    setOverview(false);
    setAppointment(true);
    setVisits(false);
    setTransactions(false);
    setMembership(false);
  };
  const setvisits = () => {
    setOverview(false);
    setAppointment(false);
    setVisits(true);
    setTransactions(false);
    setMembership(false);
  };
  const settransactions = () => {
    setOverview(false);
    setAppointment(false);
    setVisits(false);
    setTransactions(true);
    setMembership(false);
  };
  const setmembership = () => {
    setOverview(false);
    setAppointment(false);
    setVisits(false);
    setTransactions(false);
    setMembership(true);
  };

  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-white bg-opacity-30 backdrop-blur-sm w-[100%] flex justify-end items-start">
      <div className="bg-white w-[50%] h-full rounded-xl p-4">
        <nav className="flex-1 border-b-2 border-gray-200 h-14">
          <button
            onClick={setoverview}
            className={
              overview
                ? "bg-orange-700 text-white m-3 p-1 rounded-lg"
                : "bg-gray-200 m-3 p-1 rounded-lg"
            }
          >
            Overview
          </button>
          <button
            onClick={setappointments}
            className={
              appointments
                ? "bg-orange-700 text-white m-3 p-1 rounded-lg"
                : "bg-gray-200 m-3 p-1 rounded-lg"
            }
          >
            Appointments
          </button>
          <button
            onClick={setvisits}
            className={
              vistits
                ? "bg-orange-700 text-white m-3 p-1 rounded-lg"
                : "bg-gray-200 m-3 p-1 rounded-lg"
            }
          >
            Visits
          </button>
          <button
            onClick={settransactions}
            className={
              transactions
                ? "bg-orange-700 text-white m-3 p-1 rounded-lg"
                : "bg-gray-200 m-3 p-1 rounded-lg"
            }
          >
            Transactions
          </button>
          <button
            onClick={setmembership}
            className={
              membership
                ? "bg-orange-700 text-white m-3 p-1 rounded-lg"
                : "bg-gray-200 m-3 p-1 rounded-lg"
            }
          >
            Membership
          </button>
        </nav>
        <div className="grid grid-cols-3">
          <div className="col-span-1">
            <img
              src={image}
              alt="profile pic"
              className="h-[150px] w-[150px] m-8 rounded-md"
            />
          </div>
          <div className="col-span-2 flex flex-col mt-9">
            <div className="border-b-2 border-gray-300">
              <div className=" flex flex-row  ">
                <h1 className="text-xl font-bold ">Sonam Kapoor</h1>
                <div className="bg-gray-50 h-8 ml-3 items-center flex rounded-lg p-2">
                  <h1 className=" text-sm text-green-400 ">Golden</h1>
                </div>
              </div>
              <div className=" flex flex-row mt-3 ">
                <div className="h-2 w-2 mt-2 mr-2 bg-orange-500 rotate-45"></div>
                <h1 className="text-md font-normal ">Avctive now</h1>
                <div className="h-8 ml-6 pt-1 flex rounded-lg ">
                  <h1 className=" text-sm text-gray-400 ">Visited Today</h1>
                </div>
              </div>
            </div>
            <div className="h-[20vh] border-b-2 border-gray-300 grid grid-cols-3">
              <div className="flex flex-col justify-around items-center">
                <h1 className="font-bold text-gray-500">Classes</h1>
                <h1 className="font-bold text-2xl">34</h1>
              </div>
              <div className="flex flex-col justify-around items-center">
                <h1 className="font-bold text-gray-500">LTV</h1>
                <h1 className="font-bold text-2xl">$460</h1>
              </div>
              <div className="flex flex-col justify-around items-center">
                <h1 className="font-bold text-gray-500">Average Order </h1>
                <h1 className="font-bold text-2xl">$9.20</h1>
              </div>
            </div>
            <div className="border-b-2 border-gray-300">
              <div className="flex flex-row mt-3 ">
                <h1 className="font-bold text-gray-500">Requests</h1>
                <div className="bg-red-500 h-6 w-11 mt-0 ml-3 items-center flex rounded-lg p-2">
                  <h1 className=" text-sm text-white ">New</h1>
                </div>
              </div>
              <div className=" flex flex-row bg-red-200 w-auto h-[8vh] mt-3 rounded-xl ">
                <h1 className="text-orange-700 font-bold pt-3 pl-2">Yoga for Begginers</h1>
                <h1 className="  pt-3 pl-[170px]">9:00</h1>
                <h1 className="  pt-3 pl-3">FEB 6</h1>
              </div>
              <div className=" flex flex-row bg-red-200 w-auto h-[8vh] mt-3 rounded-xl mb-6">
                <h1 className="text-green-700 font-bold pt-3 pl-2">Meditation</h1>
                <h1 className="  pt-3 pl-[230px]">9:00</h1>
                <h1 className="  pt-3 pl-3">FEB 6</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerModal;
