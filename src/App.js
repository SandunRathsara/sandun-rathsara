import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./App.css"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import CV from "./components/CV"
import Contact from "./components/Contact"
import "bootstrap/dist/css/bootstrap.min.css"

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/xp" component={Experience} />
            <Route path="/cv" component={CV} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
