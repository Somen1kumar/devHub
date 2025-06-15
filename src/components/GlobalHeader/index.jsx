import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toogleTheme,addLoggedInData } from "../../redux/reducer";
import {GlobalDarkStyles, GlobalLightStyles} from './styles'

const Index = () => {
  const dispatch = useDispatch();
  const loggedInData = useSelector((store) => store.userStore.loggedInData);
  const currentState = localStorage.getItem("isDarkTheme") ?? false;

  const [isDarkThemeOn, setDarkThemeOn] = useState(currentState === "true" ? true : false);
  const GlobalStyles = isDarkThemeOn ? GlobalDarkStyles : GlobalLightStyles;
  useEffect(() => {
    const currentState = localStorage.getItem("isDarkTheme") ?? false;
    const darkTheme = currentState === "true" ? true : false;
    setDarkThemeOn(darkTheme);
    dispatch(toogleTheme(darkTheme));
  }, []);
  const toggleHandler = () => {
    const darkTheme = !isDarkThemeOn;
    setDarkThemeOn(darkTheme);
    dispatch(toogleTheme(darkTheme));
    localStorage.setItem("isDarkTheme", darkTheme);
  };
  const onLogoutHandler = () => {
    dispatch(addLoggedInData({}));
  }
  return (
    <div className={GlobalStyles.globalWrapper}>
      <div className="flex">
        <div>
          <Link to="/">
          <img
            src="https://media.glassdoor.com/sqll/8334523/pixel-consultancy-squareLogo-1675684815778.png"
            alt="logo"
            className="w-[80px] h-[80px] " /> 
            </Link>
        </div>
        <nav className={GlobalStyles.navStyle}>
          <Link to="/" className={GlobalStyles.hoverUnderLine}>
            Home
          </Link>
          {Object.keys(loggedInData) <= 0 && 
            <Link to="/login" className={GlobalStyles.hoverUnderLine}>
              Login
            </Link>
          }
        </nav>
      </div>
      <div className="flex">
        <button
          onClick={toggleHandler}
          className={`${GlobalStyles.darkLightTheme} ${
            isDarkThemeOn ? "bg-gray-900" : "bg-green-500"
          } text-xs`}
        >
          {isDarkThemeOn ? "🌙 Dark Mode": "☀️ Light Mode"}
        </button>

        {Object.keys(loggedInData).length > 0 && 
          <div className="flex items-center gap-1">
            <div className={`text-xl ${GlobalStyles.textColor}`}>{loggedInData.name}</div>
            <button className={`text-xl ${GlobalStyles.logoutStyle}`} onClick={onLogoutHandler}>
              Logout
            </button>
          </div>
        }
      </div>
    </div>
  );
};

export default Index;
