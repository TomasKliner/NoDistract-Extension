import React from "react"

import solveMath from "~components/solveMath"

export default function Annoycaptcha(props) {
  const [value, setValue] = React.useState("")
  let handleValue = (event) => {
    setValue(event.target.value)
  }

  const [prompt, setPrompt] = React.useState("")
  React.useEffect(() => {
    handlePrompt(5, 7)
  }, [])

  function handlePrompt(repetition, difficulty) {
    for (let i = 0; i < difficulty; i++) {
      let random = Math.floor(Math.random() * 100) // * difficulty/2
      const operations = ["+", "-"]
      setPrompt((x) => {
        if (x === "") {
          return random.toString()
        }
        return (
          x +
          " " +
          operations[Math.floor(Math.random() * operations.length)] +
          " " +
          random
        )
      })
    }
    console.log("test");
   // console.log("solution: "+ solveMath("1 + 2" ));
  }

  //write function to convert string with math expression to solution

  return (
    <div className="fixed z-[9000] h-full w-full bg-black backdrop-blur-xl bg-opacity-70 text-white">
      <h1 className="text-xl font-bold text-center bg-red-500 p-4 mb-48">
        To continue you have to complete this captcha!
      </h1>
      <p className="text-4xl font-bold m-4 p-4 w-auto">{prompt}</p>
      <div className="flex justify-center">
        <input
          type="text"
          className="bg-white p-4 text-2xl rounded-l-2xl border-2 border-blue-500 text-black"
          value={value}
          onChange={handleValue}></input>
        <div className="bg-blue-500 p-4 text-2xl rounded-r-2xl border-2 border-blue-500 text-white hover:cursor-pointer">
          Submit
        </div>
      </div>
    </div>
  )
}
