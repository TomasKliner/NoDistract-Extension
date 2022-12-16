import React, { useEffect } from "react"

import { Storage } from "@plasmohq/storage"

import "../../style.css"

import Layout from "../components/layout"

const storage = new Storage()

import Annoycaptcha from "~components/annoyCaptcha"
export default function Custom() {

  return (
    <Layout>
            <h1 className="text-2xl w-full bg-gradient-to-tr from-slate-500 to-slate-600 mb-2 text-white p-2">Custom</h1>
            <Annoycaptcha />
    </Layout>
  )
}
