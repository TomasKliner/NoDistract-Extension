import React, { useEffect } from "react"

import { Storage } from "@plasmohq/storage"

import "../../style.css"

import Sidebar from "../components/sidebar"
import { setDefaultResultOrder } from "dns"

const storage = new Storage()

export default function options() {
  const [redirectUrl, setRedirectUrl] = React.useState(undefined)
  const [difficulty, setDifficulty] = React.useState(5);
  const [repetition, setRepetition] = React.useState(5);

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
  function handleRepetition(event) {
    setRepetition(event.target.value)
  }
  function handleDifficulty(event) {
    setDifficulty(event.target.value)
  }
  return (
    <div className="flex justify-between h-screen w-screen">
      <Sidebar />
      <div className="text-black w-full text-center overflow-y-scroll min-h-screen">
        <h1 className="text-2xl w-full bg-gradient-to-tr from-slate-500 to-slate-600 mb-2 text-white p-2">
          Default Settings
        </h1>
        <label className="flex justify-center mb-2">
          <h2>What happens on blocked website: </h2>
          <select className="border-2 border-black rounded p-2 bg-white" name="cars" id="cars">
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
        <div className="border-2 border-blue-500 border-dashed p-4 m-4 relative rounded">
          <h2 className="text-2xl text-blue-700 font-bold mb-4 absolute -top-4 bg-white px-4">
            Annoyence seting:
          </h2>
          <label className="flex justify-center">
            <h3>Level of Difficulty: </h3>
            <input
              min="0"
              max="10"
              type="range"
              onChange={handleRepetition}
              className=" border-2 border-black"
            />
          </label>
          <label className="flex justify-center">
            <h3>Repetition Time: </h3>
            <input
              min="0"
              max="10"
              type="range"
              onChange={handleRepetition}
              className="border-4 border-black"
            />
          </label>
        </div>

        <button
          id="save"
          className="button m-auto font-medium">
          SAVE // does nothing
        </button>
      </div>
    </div>
  )
}
