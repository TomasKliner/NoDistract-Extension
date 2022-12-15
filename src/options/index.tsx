import React, { useEffect } from "react"

import { Storage } from "@plasmohq/storage"

import "../../style.css"

import Sidebar from "../components/sidebar"

const storage = new Storage()

export default function options() {
  const [redirectUrl, setRedirectUrl] = React.useState(undefined)

  React.useEffect(() => {
    let loadData = async () => {
      let value = await storage.get("redirectUrl")
      console.log(value)
      setRedirectUrl(value)
    }
    loadData()
  }, [])

  React.useEffect(() => {
    let asyncWork = async () => {
      console.log("saved")
      await storage.set("redirectUrl", redirectUrl)
    }
    redirectUrl !== undefined && asyncWork()
  }, [redirectUrl])

  function handleUrl(event) {
    setRedirectUrl(event.target.value)
  }
  return (
    <div className="flex justify-between h-screen w-screen">
      <Sidebar />
      <div className="text-black w-full text-center overflow-y-scroll min-h-screen">
        <h1 className="text-2xl w-full bg-gradient-to-tr from-slate-500 to-slate-600 mb-2 text-white p-2">
          Default Settings
        </h1>
        <label className="flex justify-center mb-2">
          <h2>What happens on blocking of website (test):</h2>
          <select className="border-2 border-black rounded p-2" name="cars" id="cars">
            <option value="redirect">Redirect to Url</option>
            <option value="last">last page</option>
            <option value="default">Default page</option>
            <option value="Quotes">Motivational Quotes Pages</option>
            <option value="text">Own text</option>
          </select>
        </label>

        <label className="flex justify-center">
          <h3>page you get reddirected to:</h3>
          <input
            type="text"
            id="redirectUrl"
            className="input input-bordered p-2 mx-2 border-2 border-black rounded"
            placeholder="google.com"
            value={redirectUrl}
            onChange={handleUrl}></input>
        </label>
        <div className="border-2 border-blue-500 border-dashed p-4 m-4">
          <h2 className="text-2xl text-blue-700 font-bold mb-4">
            Annoyence seting:
          </h2>
          <label className="flex justify-center">
            <h3>Level of Difficulty: </h3>
            <input
              min="0"
              max="10"
              type="range"
              className=" border-2 border-black"
            />
          </label>
          <label className="flex justify-center">
            <h3>Repetition Time: </h3>
            <input
              min="0"
              max="10"
              type="range"
              className="border-2 border-black"
            />
          </label>
        </div>

        <button
          id="save"
          className="block bg-blue-500 text-white rounded shadow p-2 my-2 border-2 border-white m-auto">
          SAVE // does nothing
        </button>
      </div>
    </div>
  )
}
