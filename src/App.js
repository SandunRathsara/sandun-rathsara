import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import "./App.css"
import NavBar from "./components/NavBar/NavBar"
import "bootstrap/dist/css/bootstrap.min.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {console.log("hellow world")}
        <header className="App-header">
          <h1>Hi, I'm Sandun</h1>
        </header>
      </div>
    )
  }
}

export default App
