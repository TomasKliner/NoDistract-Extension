import React, { useEffect } from "react"

import { Storage } from "@plasmohq/storage"
import { useStorage } from "@plasmohq/storage/hook"

import "../../style.css"

import Sidebar from "../components/sidebar"

const storage = new Storage()
// TODO not working figure it ouit
export default function Limits() {
	// const [limits, , storageLimits] = useStorage("limits", [
	// 	{ website: "", limit: 0, duration: 0, date: Date.now(), openedFrom: undefined }
	// ])
	const [limits, , storageLimits] = useStorage("limits", async (v) =>
		v === undefined ? [{ website: "", limit: 0, duration: 0, date: Date.now(), openedFrom: undefined }] : v
	)
	let mappedLimits
	useEffect(() => {
		mappedLimits = limits.map((limit) => {
			return <Website key={limit.website} website={limit.website} number={limit.limit} />
		})
		console.log(mappedLimits)
	}, [limits])

	function handleAdd() {
		storageLimits.setRenderValue((prev) => {
			prev.push({ website: "place", limit: 0, duration: 0, date: Date.now(), openedFrom: undefined })
			return prev
		})
	}

	return (
		<div className="flex justify-between h-screen w-screen">
			<Sidebar />
			<div className="text-black w-full text-center overflow-y-scroll min-h-screen">
				<h1 className="text-2xl w-full bg-gradient-to-tr from-slate-500 to-slate-600 mb-2 text-white p-2">
					Time Limits
				</h1>
				<div id="arr" className="flex flex-col">
					<div className="flex justify-center">
						<h2 className="w-1/2 text-blue-700">Website (keyword based)</h2>
						<h2 className="w-48 text-cyan-500">Minutes</h2>
					</div>
					<div className="">
						{mappedLimits}
						<button
							onClick={handleAdd}
							className="button bg-green-500 m-auto font-medium px-4 rounded-full shadow-md shadow-green-400">
							Add
						</button>
						<button onClick={() => storageLimits.setRenderValue(limits)} 
						className="button m-auto">
							Save
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export function Website(props) {
	const [duration, setDuration] = React.useState(props.number)
	const [website, setWebsite] = React.useState(props.website)

	return (
		<div className="flex justify-center w-full mb-1">
			<input
				type="text"
				value={website}
				onChange={(e) => setWebsite(e.target.value)}
				className="border-2 border-blue-500 rounded-l w-1/2 shadow p-1"></input>
			<input
				type="number"
				value={duration}
				onChange={(e) => setDuration(e.target.value)}
				className="border-2 border-cyan-500 w-16 shadow p-1 text-center"></input>
			<span className="bg-red-500 rounded-r-full border-2 border-red-700 h-full text-white py-1 px-2 font-bold  shadow hover:cursor-pointer">
				x
			</span>
		</div>
	)
}
