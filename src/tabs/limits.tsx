import React, { useEffect } from "react"

import { Storage } from "@plasmohq/storage"

import "../../style.css"

import Sidebar from "../components/sidebar"

const storage = new Storage()

export default function Limits() {
  return (
    <div className="flex justify-between h-screen w-screen">
      <Sidebar />
      <div className="text-black w-full text-center overflow-y-scroll min-h-screen">
      <h1 className="text-2xl w-full bg-gradient-to-tr from-slate-500 to-slate-600 mb-2 text-white p-2">Time Limits</h1>
        <div id="arr" className="flex flex-col">
          <div className="flex justify-center">
            <h2 className="w-1/2">Website (keyword based)</h2>
            <h2 className="w-48">Time in minutes</h2>
          </div>
          <div className="flex justify-center">
            <input type="text" className="input input-bordered w-1/2"></input>
            <input className="input input-bordered w-48" type="number"></input>
          </div>
        </div>
      </div>
    </div>
  )
}
