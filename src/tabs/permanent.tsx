import React, { useEffect } from "react"

import { Storage } from "@plasmohq/storage"
import { useStorage } from "@plasmohq/storage/hook"

import "../../style.css"

import Sidebar from "../components/sidebar"

const storage = new Storage()

export default function Global() {
  const [keywords, , storageKeywords] = useStorage("permanent_keywords")
  const [urls, , storageUrls] = useStorage("permanent_Urls")

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
          Permanent Block
        </h1>
        <div className="flex justify-around w-full h-3/4">
          <label className="w-full">
            <h3>Keywords:</h3>
            <p className="text-gray-500">
              Keywords are parts of url. Every Keyword is separated by New Line.
            </p>
            <textarea
              id="permanent_key"
              value={keywords}
              onChange={(e) => storageKeywords.setRenderValue(e.target.value)}
              className="p-2.5 w-3/4 h-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="keywords separated by New Line"></textarea>
          </label>
          <label className="w-full">
            <h3>Urls:</h3>
            <p className="text-gray-500">
              Urls, have to match full URL of the page.
            </p>
            <textarea
              id="permanent_url"
              value={urls}
               onChange={(e) => storageUrls.setRenderValue(e.target.value)}
              className="p-2.5 w-3/4  h-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="urls separated by New Line"></textarea>
          </label>
        </div>
        <button
          id="save_permanent"
          className="btn w-64 m-auto mt-8 border-2 rounded relative top-6 click:bg-black font-bold hover:bg-blue-600 active:bg-blue-700 active:shadow-xl"
          onClick={save}>
          Save
        </button>
      </div>
    </div>
  )
}
