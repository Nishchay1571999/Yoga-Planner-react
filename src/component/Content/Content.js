import React from 'react'
import CustomerHeader from './Customer/CustomerHeader'
import CustomerBody from './CustomerBody/CustomerBody'

function Content() {
  return (
    <div className="flex flex-col bg-gray-100  rounded-lg">
      <div className="flex-1 my-14 mx-14">
        <CustomerHeader/>
        <CustomerBody/>
      </div>
    </div>
  )
}

export default Content