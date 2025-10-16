import React from "react";
import "./App.css";
import Demo from "./components/demo.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import img from "./assets/panda.jpg"
import Button from "./components/Button.jsx"
function App() {
  return (
    <>
    <Demo/>
    <div className="card">
   <div className="card-header">Header</div>
  <div className="card-body">Content</div>
  <div className="card-footer">Footer</div>
  </div>

<img src= {img} height = {200} />
 <Button/>
    </>
  );
}

export default App;
