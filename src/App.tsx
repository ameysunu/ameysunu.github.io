import React from "react";
import Body from "./components/Body";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from "./components/projects/Projects";
import Blog from "./components/blog/Blog";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <style>{"body { background-color: #F2E1B2; }"}</style>
      <Router>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          < Route path="*" element = {<NotFound />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
