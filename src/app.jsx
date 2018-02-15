import React from "react"
import ReactDom from 'react-dom'

import './styles/styles.scss'

import WikiData from "./WikiData.js"
import WikiEntry from "./components/WikiEntry.jsx"
import AppTitle from "./components/AppTitle.jsx"


class App {
  constructor() {
    const data = new WikiData()

    this.init = function () {
      ReactDom.render(<AppTitle title="React Wikipedia App" />, document.getElementById('root'))

    }

  }
}
new App().init()

