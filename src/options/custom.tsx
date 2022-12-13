import React, { useEffect } from "react"

import { Storage } from "@plasmohq/storage"

import "../../style.css"

import Sidebar from "../components/sidebar"

const storage = new Storage()

export default function Custom() {

  return (
    <div className="flex justify-between h-screen w-screen">
      <div className="text-black w-full text-center overflow-y-scroll min-h-screen">
        <h2 className="text-2xl">MAYBE SOME DAY FOR SUBSRIBED PEOPLE</h2>
      </div>
    </div>
  )
}
