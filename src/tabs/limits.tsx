import React, { useEffect } from "react"

import { Storage } from "@plasmohq/storage"
import { useStorage } from "@plasmohq/storage/hook"

import "../../style.css"

import Sidebar from "../components/sidebar"

const storage = new Storage()
// TODO not working figure it ouit
export default function Limits() {
	const [limits, setLimits] = useStorage("limits", [
		{ website: "", limit: 0, duration: 0, date: Date.now(), openedFrom: undefined }
	])

	let mappedLimits

	if (limits !== undefined && limits !== null) {
		mappedLimits = limits.map((limit, id) => {
			return (
				<tr key={id} className="">
					<td>
						<input
							type="text"
							value={limit.website}
							onChange={(e) => handleWebsiteChange(e, id)}
							className="border-2 border-blue-500 rounded-xl p-1 w-96 shadow"></input>
					</td>
					<td>
						<input
							type="number"
							value={limit.limit}
							onChange={(e) => handleLimitChange(e, id)}
							className="border-2 border-cyan-500 p-1 text-center w-16 rounded-xl shadow"></input>
					</td>
					<td>
						<span
							className="bg-red-500 rounded-full border-2 border-red-700 h-full text-white py-1 px-2 font-black hover:cursor-pointer shadow"
							onClick={() => handleRemove(id)}>
							x
						</span>
					</td>
				</tr>
			)
		})
	}

	function handleWebsiteChange(e, id) {
		let newLimits = limits
		newLimits[id].website = e.target.value
		console.log(e.target.value)
		setLimits((last) => [...newLimits])
	}
	function handleLimitChange(e, id) {
		let newLimits = limits
		newLimits[id].limit = e.target.value
		setLimits((last) => [...newLimits])
	}
	function handleRemove(id) {
		setLimits(limits.filter((item, i) => i !== id))
	}
	function handleAdd() {
		if (limits === undefined || limits === null)
			setLimits([{ website: "", limit: 10, duration: 0, date: Date.now(), openedFrom: undefined }])
		else {
			setLimits((last) => [...last, { website: "", limit: 10, duration: 0, date: Date.now(), openedFrom: undefined }])
		}
	}

	return (
		<div className="flex justify-between h-screen w-screen">
			<Sidebar />
			<div className="text-black w-full text-center overflow-y-scroll min-h-screen">
				<h1 className="text-2xl w-full bg-gradient-to-tr from-slate-500 to-slate-600 mb-2 text-white p-2">
					Time Limits
				</h1>
				<p className="text-slate-500">Any websites/keywords shorter than 3 characters are not taken into account.</p>
				<div id="arr" className="flex flex-col">
					<table className="m-auto">
						<tr>
							<th className=" text-blue-700 text-xl">Website (keyword based)</th>
							<th className=" text-cyan-500 text-xl">Minutes</th>
							<th></th>
						</tr>
						{mappedLimits}
						<tr>
							<td>
								<button
									onClick={handleAdd}
									className="bg-green-500 font-black text-lg rounded-full shadow-md shadow-green-200 px-3 py-1 relative">
									+ Add
								</button>
							</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	)
}

export function Website(props) {
	const [duration, setDuration] = React.useState(props.number)
	const [website, setWebsite] = React.useState(props.website)

	let remove = props.click

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
			<span
				className="bg-red-500 rounded-r-full border-2 border-red-700 h-full text-white py-1 px-2 font-bold  shadow hover:cursor-pointer"
				onClick={() => props.click(props.id)}>
				x
			</span>
		</div>
	)
}
