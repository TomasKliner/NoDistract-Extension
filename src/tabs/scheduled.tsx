import React, { useEffect } from "react"

import { Storage } from "@plasmohq/storage"
import { useStorage } from "@plasmohq/storage/hook"

import "../../style.css"

import Sidebar from "../components/sidebar"

const storage = new Storage()

export default function Scheduled() {
  const [keywords, , storageKeywords] = useStorage("scheduled_keywords")
  const [urls, , storageUrls] = useStorage("scheduled_Urls")

  // use this in bg script just
  function arrayToString(arr) {
    let str = ""
    for (let i = 0; i < arr.length; ++i) {
      str += arr[i] + "\n"
    }
    return str
  }

  function stringToArray(str) {
    return str.split(/\r?\n/).filter((element) => element)
  }

  function save() {
    storageKeywords.setStoreValue()
    storageUrls.setStoreValue()
  }
  return (
    <div className="flex justify-between h-screen w-screen">
      <Sidebar />
      <div className="text-black w-full text-center overflow-y-scroll h-screen">
        <h1 className="text-2xl w-full bg-gradient-to-tr from-slate-500 to-slate-600 mb-2 text-white p-2">
          Scheduled blocks
        </h1>
        <label>
          <h3>Blocking time:</h3>
          <div className="flex justify-around">
            <div className="flex flex-col w-40 text-black border-4 border-blue-500 rounded-md text-xl font-medium">
              <figure className="bg-gradient-to-tr from-blue-500 to-cyan-500 text-white py-2">
                Monday
              </figure>
              <input type="time" className="border rounded"></input>
              <input type="time" className="border rounded"></input>
            </div>

            <div className="flex flex-col w-40 text-black border-4 border-blue-500 rounded-md text-xl font-medium">
              <figure className="bg-gradient-to-tr from-blue-500 to-cyan-500 text-white py-2">
                Tuesday
              </figure>
              <input type="time" className="border rounded"></input>
              <input type="time" className="border rounded"></input>
            </div>
          </div>
        </label>
        in future more time blocks for subscribed people ?!
        <div className="flex justify-around h-3/4 w-full">
          <label className="w-full">
            <h3>Keywords:</h3>
            <textarea
              id="global_key"
              value={keywords}
              onChange={(e) => storageKeywords.setRenderValue(e.target.value)}
              className="p-2.5 w-3/4 h-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="keywords separated by New Line"></textarea>
          </label>
          <label className="w-full">
            <h3>Urls</h3>
            <textarea
              id="global_url"
              value={urls}
              onChange={(e) => storageUrls.setRenderValue(e.target.value)}
              className="p-2.5 w-3/4 h-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="urls separated by New Line"></textarea>
          </label>
        </div>
        <button
          id="save_global"
          className="relative btn w-64 m-auto mt-4 rouned border-2 border-black top-6"
          onClick={save}>
          Save
        </button>
      </div>
    </div>
  )
}
