import React from "react";
import { Route, Navigate, Link, Redirect, Router, Routes } from "react-router-dom";
import Content from "./content";

const App = () => {
  return (
    <div className="content">
      <Router>
        <Route path="/" component={Content} />
      </Router>
    </div>
  );
}

export default App;

