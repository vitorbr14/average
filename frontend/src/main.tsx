import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Demo } from "./pages/Demo/Demo.tsx";
import Home from "./pages/Home/Home.tsx";
import TopbarGeneral from "./components/General/TopbarGeneral.tsx";
import Article from "./pages/Article/Article.tsx";
import AuthGeneral from "./pages/Login/AuthGeneral.tsx";
import { AuthContext, AuthContextProvider } from "./context/AuthContext.tsx";
import ProtectedRoute from "./components/General/ProtectedRoute.tsx";
import NewArticle from "./pages/Article/NewArticle.tsx";
import { ArticleContextProvider } from "./context/ArticleContext.tsx";
import Categories from "./pages/Categories/Categories.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Demo />,
  },
  {
    path: "/demo",
    element: <Demo />,
  },
  // {
  //   path: "/home",
  //   element: <Home />,
  // },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/article/:id",
    element: (
      <ArticleContextProvider>
        <Article />,
      </ArticleContextProvider>
    ),
  },
  {
    path: "/auth",
    element: <AuthGeneral />,
  },
  {
    path: "/categories/:id",
    element: <Categories />,
  },
  {
    path: "/article/new",
    element: (
      <ProtectedRoute>
        <NewArticle />
      </ProtectedRoute>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthContextProvider>
    <RouterProvider router={router} key={window.location.pathname} />
  </AuthContextProvider>
);
