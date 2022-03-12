import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Content from "./pages/content";
import Layout from "./components/layout";

const App = () => {
  return (
    <div className="content">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Content />} />
            <Route path="/:id" element={<Content />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
