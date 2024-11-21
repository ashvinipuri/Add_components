import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//console.log(React);
import ReactDOM from "react-dom";
import'./css/style.css'
import App from "./components/App";
import projectroute from "./projectroute";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//console.log(ReactDOM);
const result = ReactDOM.createRoot(document.getElementById("root"));

//result.render("Hello World");

// var username = "Ashvini";
// var age = 23;

// result.render(
//     <ul>
//         <li>{username}</li>
//         <li>{age}</li>
//     </ul>
// )

result.render(<App />);
result.render(<RouterProvider router={projectroute} />);
