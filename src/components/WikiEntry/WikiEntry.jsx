import React from "react";
import "./WikiEntry.scss"

export default class WikiEntry extends React.Component {


  render() {
    return (
      <div className="wiki-entry row text-left" >

        <h3 className="wiki-entry__title row text-left">
          {this.props.title}
        </h3>
        <p className="wiki-entry__content row text-left">
          {this.props.content}
        </p>
      </div >
    )
  }
}

