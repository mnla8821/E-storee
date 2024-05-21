import React, { useEffect, useState } from "react";
import "./SignUp.css";
import { NavLink } from "react-router-dom";
import usePost from "../../Custom Hooks/usePost";
import config from "../../Constants/enviroment";
import { useSelector } from "react-redux";
const SignUp = () => {
  const isRealyDark = useSelector((state) => state.counter.isDark);
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [loading, postFunc, err] = usePost(
    config.signUp,
    {
      username: userName,
      password,
      email,
    },
    {
      isSignUp: true,
      isSignIn: false,
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    postFunc();
    setEmail("");
    setPassword("");
    setUserName("");
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
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          <div
            className={isRealyDark == true ? "mb-3 light-txt" : "mb-3 dark-txt"}
          >
            <label
              for="exampleFormControlInput1"
              className={
                isRealyDark == true
                  ? "form-label fs-6 light-label"
                  : "form-label fs-6 dark-label"
              }
            >
              User Name
            </label>
            <input
              type="text"
              className={
                isRealyDark == true
                  ? "form-control light-txt"
                  : "form-control dark-txt"
              }
              id="exampleFormControlInput1"
              value={userName}
              placeholder="Enter Your Name"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label
              for="exampleFormControlInput1"
              className={
                isRealyDark == true
                  ? "form-label light-label"
                  : "form-label dark-label"
              }
            >
              Email
            </label>
            <input
              type="email"
              className={
                isRealyDark == true
                  ? "form-control light-txt"
                  : "form-control dark-txt"
              }
              id="exampleFormControlInput1"
              value={email}
              placeholder="Enter Your  Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label
              for="exampleFormControlInput1"
              className={
                isRealyDark == true
                  ? "form-label light-label"
                  : "form-label dark-label"
              }
            >
              Password
            </label>
            <input
              type="password"
              className={
                isRealyDark == true
                  ? "form-control light-txt"
                  : "form-control dark-txt"
              }
              placeholder="Enter Your Password"
              id="exampleFormControlInput1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
            Already a member?
            <NavLink
              to="/login"
              className={
                isRealyDark == true
                  ? "navlinko light-navlink"
                  : "navlinko dark-navlink"
              }
            >
              Login
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
