import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import usePost from "../../Custom Hooks/usePost";
import config from "../../Constants/enviroment";
import { useSelector } from "react-redux";
const Login = () => {
  const isRealyDark = useSelector((state) => state.counter.isDark);
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, postFunc, err] = usePost(
    config.login,
    {
      password,
      username: userName,
    },
    {
      isSignIn: true,
      isSignUp: false,
    }
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    postFunc();
  };
  return (
    <div
      className={
        isRealyDark == true
          ? "container-fluid sign-up light2"
          : "container-fluid sign-up dark2"
      }
    >
      <div className={isRealyDark == true ? "box light-box" : "box dark-box"}>
        <h2
          className={
            isRealyDark == true ? "txt pt-4 light-txt" : "txt pt-4 dark-txt"
          }
        >
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div
            className={isRealyDark == true ? "mb-3 light-txt" : "mb-3 dark-txt"}
          >
            <label
              for="exampleFormControlInput1"
              className={
                isRealyDark == true ? "  light-label" : "   dark-label"
              }
            >
              User Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className={
                isRealyDark == true
                  ? "form-control light-txt"
                  : "form-control dark-txt"
              }
              id="exampleFormControlInput1"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label
              for="exampleFormControlInput1"
              className={isRealyDark == true ? "light-label" : "dark-label"}
            >
              Password
            </label>
            <input
              type={showPassword == true ? "text" : "password"}
              placeholder="Enter Your Password"
              className={
                isRealyDark == true
                  ? "form-control light-txt"
                  : "form-control dark-txt"
              }
              id="exampleFormControlInput1"
              onChange={(e) => setPassword(e.target.value)}
            />

            <p onClick={() => setShowPassword(!showPassword)}>show</p>
          </div>
          <button
            className={
              isRealyDark == true ? "form-btn light-btn2" : "form-btn dark-btn2"
            }
          >
            {loading == null
              ? "submit"
              : loading == true
              ? "تم تسجيل الدخول بنجاح"
              : loading == false
              ? `${err}`
              : "يرجى الانتظار ..."}
          </button>
          <p className={isRealyDark == true ? "pp light-pp" : "pp dark-pp"}>
            Create an account{" "}
            <NavLink
              to="/signup"
              className={
                isRealyDark == true
                  ? "navlinko light-navlink"
                  : "navlinko dark-navlink"
              }
            >
              Sign up
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;