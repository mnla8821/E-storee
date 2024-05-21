import { useState } from "react";
import Cookies from "js-cookies";
import { Navigate, Outlet } from "react-router-dom";
const PrivateRoute = () => {
  const [token, setToken] = useState(Cookies.getItem("token"));
  return <>{token != null ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PrivateRoute;
