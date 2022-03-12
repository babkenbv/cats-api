import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter as Router, Link } from "react-router-dom";
import Content from "./content";
import Navbar from "./navbar";


import "./index.css";

const Main = () => {
  return (
    <Router>
      <div>
        <nav>
          <Navbar>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
          </Navbar>
        </nav>
        <Content />
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
