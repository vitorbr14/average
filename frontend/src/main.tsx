import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Demo } from "./pages/Demo/Demo.tsx";
import Home from "./pages/Home/Home.tsx";
import TopbarGeneral from "./components/General/TopbarGeneral.tsx";
import Article from "./pages/Article/Article.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Demo />,
  },
  {
    path: "/demo",
    element: <Demo />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/article",
    element: <Article />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
