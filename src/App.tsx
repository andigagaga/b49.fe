import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Components from "./pages/components";
import Props from "./pages/Props";



export default class App extends React.Component {
  render() {
    return(
      <React.Fragment>
        <div>
          <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Components />}/>
          <Route path="/props" element={<Props />} />
          </Routes>
          </BrowserRouter>
        </div>
      </React.Fragment>
    )
  }
}