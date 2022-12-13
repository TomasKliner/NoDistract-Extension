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
      console.log(value);
      setRedirectUrl(value)
    }
    loadData()
  }, [])

  React.useEffect(() => {
    let asyncWork = async () => {
        console.log("saved");
      await storage.set("redirectUrl", redirectUrl)
    }
    redirectUrl !== undefined && asyncWork()
  }, [redirectUrl])

  function handleUrl(event){
    setRedirectUrl(event.target.value)
  }
  return (
    <div className="flex justify-between h-screen w-screen">
      <Sidebar />

      <div className="text-black w-full text-center overflow-y-scroll min-h-screen">
        <h1 className="text-2xl">Main settings</h1>
        <label className="flex justify-center">
          <h3>page you get reddirected to:</h3>
          <input
            type="text"
            id="redirectUrl"
            className="input input-bordered p-2 mx-2 border-2 border-black"
            placeholder="google.com"
            value={redirectUrl}
            onChange={handleUrl}></input>
        </label>
        <button id="save" className="block m-auto btn btn-accent">
          SAVE // does nothing
        </button>
      </div>
    </div>
  )
}
