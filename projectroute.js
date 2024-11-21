import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Content from "./components/Content";
import App from "./components/App";
import Product1 from "./components/Product1";
import Class1 from "./components/Class1";
import Class2 from "./components/Class2";
import Class3 from "./components/Class3";
import Class4 from "./components/Class4";
import CompA from "./components/CompA";
import Parent from "./components/Parent";
import Parent2 from "./components/Parent2";

const projectroute = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "loginpage",
        element: <Login />,
      },
      {
        path: "registerpage",
        element: <Register />,
      },
      {
        path: "contentpage",
        element: <Content />,
      },
      {
        path: "productpage",
        element: <Product1 />,
      },
      {
        path: "class1",
        element: <Class1 name="Ashvini" age="25" />,
      },
      {
        path: "class2",
        element: <Class2 />,
      },
      {
        path: "class3",
        element: <Class3 />,
      },
      {
        path: "class4",
        element: <Class4 />,
      },
      {
        path: "propsdrilling",
        element: <CompA />,
      },
      {
        path: "parent1",
        element: <Parent />,
      },
      {
        path: "parent2",
        element: <Parent2 />,
      },
    ],
  },
]);
export default projectroute;
