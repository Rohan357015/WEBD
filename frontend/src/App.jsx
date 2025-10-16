import React from "react";
import "./App.css";
import Demo from "./components/demo.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <h1>Hello, World!</h1>
      <button className="btn btn-primary">Click Me</button>
      <Demo />
      <nav class="navbar navbar-default">
     <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
     </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
  </div>
</nav>
    </>
  );
}

export default App;