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
				<div key={id} className="flex justify-center w-full mb-1">
					<input
						type="text"
						value={limit.website}
						className="border-2 border-blue-500 rounded-l w-1/2 shadow p-1"></input>
					<input
						type="number"
						value={limit.limit}
						className="border-2 border-cyan-500 w-16 shadow p-1 text-center"></input>
					<span
						className="bg-red-500 rounded-r-full border-2 border-red-700 h-full text-white py-1 px-2 font-bold  shadow hover:cursor-pointer"
						onClick={ () => handleRemove(id)}>
						x
					</span>
				</div>
			)
		})
	}
	//TODO loooped broken
	function handleRemove(id) {
		setLimits(limits.filter((item, i) => i !== id));
	}
	function handleAdd() {
		if (limits === undefined || limits === null)
			setLimits([{ website: "", limit: 0, duration: 0, date: Date.now(), openedFrom: undefined }])
		else {
			setLimits((last) => [...last, { website: "", limit: 0, duration: 0, date: Date.now(), openedFrom: undefined }])
		}
	}
	function handleSave() {}

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
						<button onClick={handleSave} className="button m-auto mt-8 w-32">
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
				onClick={props.click}>
				x
			</span>
		</div>
	)
}
