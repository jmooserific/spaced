import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

jest.mock("react-dom", () => ({ render: jest.fn() }))

test("renders with App and root div", () => {
  const root = document.createElement("div")
  root.id = "root"
  document.body.appendChild(root)

  require("./index")

  expect(ReactDOM.render).toHaveBeenCalledWith(<React.StrictMode><App /></React.StrictMode>, root)
})