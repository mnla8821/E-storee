import React, { useEffect, useState } from "react";
import Header from "./Sections/Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Root = () => {
  const location = useLocation();
  const [status, setStatus] = useState(false);
  useEffect(() => {
    if (location.pathname == "/login" || location.pathname == "/signup") {
      setStatus(false);
    } else {
      setStatus(true);
    }
    if (
      localStorage.getItem("numofitem") == null ||
      localStorage.getItem("numofitem") == ""
    ) {
      localStorage.setItem("numofitem", 0);
    }
    if (
      localStorage.getItem("buyProduct") == null ||
      localStorage.getItem("buyProduct") == ""
    ) {
      localStorage.setItem("buyProduct", JSON.stringify([]));
    }
    if (
      localStorage.getItem("countOfProduct") == null ||
      localStorage.getItem("countOfProduct") == ""
    ) {
      localStorage.setItem("countOfProduct", JSON.stringify([]));
    }
    
  }, [
    location.pathname,
    localStorage.getItem("numofitem"),
    localStorage.getItem("buyProduct"),
    localStorage.getItem("countOfProduct"),
  ]);
  return (
    <div className="App">
      {status == false ? <></> : <Header />}
      <Outlet />
    </div>
  );
};

export default Root;
