import React, { useEffect } from "react"

import { Storage } from "@plasmohq/storage"

import "../../style.css"

import Sidebar from "../components/sidebar"

const storage = new Storage()
export default function IndexPage() {
  return (
    <div>
      <body className="bg-neutral-800 w-80 h-96 text-white">
        <div>
          <h2 className="text-center">Time Spent (Today)</h2>
          <p className="text-center">time</p>
          <h2 className="text-center">Time left</h2>
          <p className="text-center">time</p>
        </div>
        <a href="./settings.html">
          <div className="w-16 h-16 rounded-full bg-white text-black flex items-center text-center font-bold shadow hover:bg-neutral-200">
            Settings
          </div>
        </a>
      </body>

      <script src="../scripts/index.js"></script>
      <script src="../scripts/time.js"></script>
    </div>
  )
}
