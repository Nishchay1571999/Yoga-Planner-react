import React from "react";
import image from "../../../assets/face.jpeg";
import CustomerModal from "./CustomerModal";
import { useState } from "react";

function CustomerBody() {
   const [showModal,setShowModal] = useState(false)
  return (
    <div>
      <div className="w-full h-[56vh] bg-white mt-3 mr-3 ml-1 rounded-md">
        <h3 className="font-semibold text-lg pl-3">All Customers </h3>
        <table className="w-full items-center">
          <tr className="items-center">
            <th className="text-md font-normal ">Id</th>
            <th className="text-md font-normal ">Name</th>
            <th className="text-md font-normal ">Last Visit</th>
            <th className="text-md font-normal ">Age</th>
            <th className="text-md font-normal ">Gender</th>
            <th className="text-md font-normal ">Membership</th>
            <th className="text-md font-normal ">Payment</th>
            <th className="text-md font-normal ">Classes</th>
            <th className="text-md font-normal ">Call</th>
            <th className="text-md font-normal ">Watch</th>
          </tr >
            <tr className="items-center" onClick={()=>setShowModal(true)}>
              <td className="text-md font-normal items-center ml-5">1</td>
              <td className="text-md font-normal flex flex-row ml-5">
                <img src={image} className="h-7 w-7 rounded-full mr-1" alt="" />
                <h1>Sonam Kapoor</h1>
              </td>
              <td className="text-md font-normal pl-3"><span className="ml-7">Sep 20th,2019</span></td>
              <td className="text-md font-normal ml-5"><span className="ml-7">30</span></td>
              <td className="text-md font-normal ml-5"><span className="ml-7">Female</span></td>
              <td className="text-md font-normal ml-5"><span className="ml-7">Golden</span></td>
              <td className="text-md font-normal ml-5"><span className="ml-7">$400</span></td>
              <td className="text-md font-normal ml-5"><span className="ml-7">$5</span></td>
              <td className="text-md font-normal ">
                <button className="w-full bg-gray-300 rounded-md">Call</button>
              </td>
              <td className="text-md font-normal">
                <button className="w-[70%] bg-gray-300 rounded-md ml-5">
                  Watch
                </button>
              </td>
            </tr>
            <tr className="items-center" onClick={()=>setShowModal(true)}>
              <td className="text-md font-normal items-center ml-5">1</td>
              <td className="text-md font-normal flex flex-row ml-5">
                <img src={image} className="h-7 w-7 rounded-full mr-1" alt="" />
                <h1>Sonam Kapoor</h1>
              </td>
              <td className="text-md font-normal pl-3"><span className="ml-7">Sep 20th,2019</span></td>
              <td className="text-md font-normal ml-5"><span className="ml-7">30</span></td>
              <td className="text-md font-normal ml-5"><span className="ml-7">Female</span></td>
              <td className="text-md font-normal ml-5"><span className="ml-7">Golden</span></td>
              <td className="text-md font-normal ml-5"><span className="ml-7">$400</span></td>
              <td className="text-md font-normal ml-5"><span className="ml-7">$5</span></td>
              <td className="text-md font-normal ">
                <button className="w-full bg-gray-300 rounded-md">Call</button>
              </td>
              <td className="text-md font-normal">
                <button className="w-[70%] bg-gray-300 rounded-md ml-5">
                  Watch
                </button>
              </td>
            </tr>
            <tr className="items-center" onClick={()=>setShowModal(true)}>
              <td className="text-md font-normal items-center ml-5">1</td>
              <td className="text-md font-normal flex flex-row ml-5">
                <img src={image} className="h-7 w-7 rounded-full mr-1" alt="" />
                <h1>Sonam Kapoor</h1>
              </td>
              <td className="text-md font-normal pl-3"><span className="ml-7">Sep 20th,2019</span></td>
              <td className="text-md font-normal ml-5"><span className="ml-7">30</span></td>
              <td className="text-md font-normal ml-5"><span className="ml-7">Female</span></td>
              <td className="text-md font-normal ml-5"><span className="ml-7">Golden</span></td>
              <td className="text-md font-normal ml-5"><span className="ml-7">$400</span></td>
              <td className="text-md font-normal ml-5"><span className="ml-7">$5</span></td>
              <td className="text-md font-normal ">
                <button className="w-full bg-gray-300 rounded-md">Call</button>
              </td>
              <td className="text-md font-normal">
                <button className="w-[70%] bg-gray-300 rounded-md ml-5">
                  Watch
                </button>
              </td>
            </tr>
            <tr className="items-center" onClick={()=>setShowModal(true)}>
              <td className="text-md font-normal items-center ml-5">1</td>
              <td className="text-md font-normal flex flex-row ml-5">
                <img src={image} className="h-7 w-7 rounded-full mr-1" alt="" />
                <h1>Sonam Kapoor</h1>
              </td>
              <td className="text-md font-normal pl-3"><span className="ml-7">Sep 20th,2019</span></td>
              <td className="text-md font-normal ml-5"><span className="ml-7">30</span></td>
              <td className="text-md font-normal ml-5"><span className="ml-7">Female</span></td>
              <td className="text-md font-normal ml-5"><span className="ml-7">Golden</span></td>
              <td className="text-md font-normal ml-5"><span className="ml-7">$400</span></td>
              <td className="text-md font-normal ml-5"><span className="ml-7">$5</span></td>
              <td className="text-md font-normal ">
                <button className="w-full bg-gray-300 rounded-md">Call</button>
              </td>
              <td className="text-md font-normal">
                <button className="w-[70%] bg-gray-300 rounded-md ml-5">
                  Watch
                </button>
              </td>
            </tr>
            <tr className="items-center" onClick={()=>setShowModal(true)}>
              <td className="text-md font-normal items-center ml-5">1</td>
              <td className="text-md font-normal flex flex-row ml-5">
                <img src={image} className="h-7 w-7 rounded-full mr-1" alt="" />
                <h1>Sonam Kapoor</h1>
              </td>
              <td className="text-md font-normal pl-3"><span className="ml-7">Sep 20th,2019</span></td>
              <td className="text-md font-normal ml-5"><span className="ml-7">30</span></td>
              <td className="text-md font-normal ml-5"><span className="ml-7">Female</span></td>
              <td className="text-md font-normal ml-5"><span className="ml-7">Golden</span></td>
              <td className="text-md font-normal ml-5"><span className="ml-7">$400</span></td>
              <td className="text-md font-normal ml-5"><span className="ml-7">$5</span></td>
              <td className="text-md font-normal ">
                <button className="w-full bg-gray-300 rounded-md">Call</button>
              </td>
              <td className="text-md font-normal">
                <button className="w-[70%] bg-gray-300 rounded-md ml-5">
                  Watch
                </button>
              </td>
            </tr>

        </table>
      <CustomerModal visible={showModal} setvisible={setShowModal}/>
      </div>
    </div>
  );
}

export default CustomerBody;
