import React from "react"
import ReactDom from 'react-dom'

import WikiData from "./WikiData.js"
import WikiEntry from "./components/WikiEntry/WikiEntry.jsx"


class App {
  constructor() {
    const data = new WikiData()


    this.init = function () {
      ReactDom.render(<WikiEntry title="title goes here" content="content goes here..." />, document.getElementById('root'))

    }

  }
}
new App().init()

