import React from "react";
import "./Loading.css";
import { useSelector } from "react-redux";
const Loading = () => {
  const isRealyDark = useSelector((state) => state.counter.isDark);
  return (
    <div
      className={
        isRealyDark == true
          ? "parent-spinner light-loading"
          : "parent-spinner dark-loading"
      }
    >
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
