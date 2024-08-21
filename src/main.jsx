import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Footer from "./components/Footer"
import Header from "./components/Header"
import InitialPage from "./pages/InitialPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <InitialPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={router} />
    <Footer/>
  </React.StrictMode>
);