import React, { PropsWithChildren, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

type ProtectedRouteProps = PropsWithChildren;
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const ContextAuth = useContext(AuthContext);

  const navigate = useNavigate();
  if (!ContextAuth) {
    throw new Error("Teste Contexto invalido");
  }

  useEffect(() => {
    if (!ContextAuth.loading && !ContextAuth.isLoggedIn) {
      navigate("/demo");
    }
  }, [navigate, ContextAuth.isLoggedIn, ContextAuth.loading]);
  return children;
};

export default ProtectedRoute;
