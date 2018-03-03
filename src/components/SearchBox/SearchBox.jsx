
import React from "react"
import "./components/SearchBox/SearchBox.scss"

class __ extends React.Component {
  constructor(props) {
    super(props)
    this.state = { input: "" }
  }

  render() {
    return (
      <input className="form-control form-control-text" type="text" placeholder="Search Wikipedia..." />

    )

  }
}