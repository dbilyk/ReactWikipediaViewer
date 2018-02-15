import React from "react"

export default class AppTitle extends React.Component {
  render() {
    return (
      <h1 className='title col text-center'>{this.props.title}</h1>
    )
  }
}