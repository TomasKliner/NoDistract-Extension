import React, { useEffect } from "react"

import { Storage } from "@plasmohq/storage"

import "../../style.css"

import Sidebar from "../components/sidebar"

const storage = new Storage()

export default function Global() {
  return (
    <div className="flex justify-between h-screen w-screen">
      <Sidebar />

      <div className="text-black w-full text-center overflow-y-scroll h-screen">
        <h2 className="text-2xl">Permanent Block</h2>
        <div className="flex justify-around w-full h-3/4">
          <label className="w-full">
            <h3>Keywords:</h3>
            <textarea
              id="permanent_key"
              className="p-2.5 w-3/4 h-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="keywords separated by New Line"></textarea>
          </label>
          <label className="w-full">
            <h3>Urls:</h3>
            <textarea
              id="permanent_url"
              className="p-2.5 w-3/4  h-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="urls separated by New Line"></textarea>
          </label>
        </div>
        <button
          id="save_permanent"
          className="btn w-64 m-auto mt-4 border-2 border-black rounded relative top-6">
          save
        </button>
      </div>
      <script src="../scripts/permanent.js"></script>
    </div>
  )
}
