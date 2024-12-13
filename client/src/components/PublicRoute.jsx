import React from "react";
import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }) {
  if (localStorage.getItem("fittrack-app-token")) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}
