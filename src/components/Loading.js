import React, { Component } from 'react'
import loadingGif from "./loading.gif"

export default class Loading extends Component {
  render() {
    return (
        <div className="col my-4 text-center">
            <img src={loadingGif} height="50" alt="loading" />
        </div>
    )
  }
}