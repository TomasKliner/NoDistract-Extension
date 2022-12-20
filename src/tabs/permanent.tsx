import React, { useEffect } from "react"

import { Storage } from "@plasmohq/storage"
import { useStorage } from "@plasmohq/storage/hook"

import "../../style.css"

import { url } from "inspector"

import Sidebar from "../components/sidebar"

const storage = new Storage()

export default function Global() {
	const [keys, setKeys] = useStorage("pernament_keywords", [])
	const [urls, setUrls] = useStorage("pernament_urls", [])
	let mappedUrls
	if (urls !== undefined && urls !== null) {
		mappedUrls = urls.map((x, id) => {
			return (
				<div className="mb-1">
					<input
						key={id}
						className="border-2 border-blue-500 rounded-l-xl p-1 w-96 shadow"
						type="text"
						value={x}
						onChange={(e) => handleUrls(e, id)}
					/>
					<span
						className="border-2 rounded-r-full border-red-700 bg-red-500 text-white py-1.5 px-2 cursor-pointer"
						onClick={(e) => handleRemoveUrls(e, id)}>
						X
					</span>
				</div>
			)
		})
	}

	let mappedKeys
	if (keys !== undefined && keys !== null) {
		mappedKeys = keys.map((x, id) => {
			return (
				<div className="mb-1">
					<input
						key={id}
						className="border-2 border-blue-500 rounded-l-xl p-1 w-96 shadow"
						type="text"
						value={x}
						onChange={(e) => handleKey(e, id)}
					/>
					<span
						className="border-2 rounded-r-full border-red-700 bg-red-500 text-white py-1.5 px-2 cursor-pointer"
						onClick={(e) => handleRemove(e, id)}>
						X
					</span>
				</div>
			)
		})
	}

	function handleRemove(e, id) {
		let newK = keys
		newK.splice(id, 1)
		setKeys([...newK])
	}
	function handleKey(e, id) {
		let newK = keys
		newK[id] = e.target.value
		setKeys([...newK])
	}
	function handleAdd() {
		if (keys === undefined || keys === null) setKeys([""])
		else {
			setKeys((last) => [...last, ""])
		}
	}

	function handleRemoveUrls(e, id) {
		let newK = urls
		newK.splice(id, 1)
		setUrls([...newK])
	}
	function handleUrls(e, id) {
		let newK = urls
		newK[id] = e.target.value
		setUrls([...newK])
	}
	function handleAddUrls() {
		if (urls === undefined || urls === null) setUrls([""])
		else {
			setUrls((last) => [...last, ""])
		}
	}

	return (
		<div className="flex justify-between h-screen w-screen">
			<Sidebar />
			<div className="text-black w-full text-center overflow-y-scroll h-screen">
				<h1 className="text-2xl w-full bg-gradient-to-tr from-slate-500 to-slate-600 mb-2 text-white p-2">
					Permanent Block
				</h1>
				<div className="flex justify-around w-full mt-8">
					<div className="flex flex-col">
						<h3 className="text-blue-500">Keywords:</h3>
						<p className="text-gray-500 mb-2">Keywords are parts of url. Every Keyword is separated by New Line.</p>
						{mappedKeys}
						<button
							className="relative w-16 bg-green-500 font-black text-lg rounded-full  px-3 py-1"
							onClick={handleAdd}>
							Add
						</button>
					</div>
					<div className="flex flex-col">
						<h3 className="text-blue-500">Urls:</h3>
						<p className="text-gray-500 mb-2">Urls, have to match full URL of the page.</p>
						{mappedUrls}
						<button
							className="relative w-16 bg-green-500 font-black text-lg rounded-full  px-3 py-1"
							onClick={handleAddUrls}>
							Add
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
