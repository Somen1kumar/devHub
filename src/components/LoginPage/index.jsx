// src/components/LoginPage.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { LoginPageLightTheme, LoginPageDarkTheme } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { addLoggedInData } from "../../redux/reducer";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector((store) => store.userStore.isDarkTheme);

  const LoginPageTheme = selector? LoginPageDarkTheme: LoginPageLightTheme;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login data:", data);
    const name = data.email.split('@')[0];
    const newData = {
      ...data,
      name: name
    };
    dispatch(addLoggedInData(newData));
    navigate('/');

    // You can add your login logic here
  };

  return (
    <div className={LoginPageTheme.container}>
      <div className={LoginPageTheme.wrapper}>
        <h2 className={LoginPageTheme.h2Style}>Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Email */}
          <div className="mb-4">
            <label className={LoginPageTheme.labelStyle}>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className={`${LoginPageTheme.inputStyle} ${
                errors.email ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-blue-300"
              }`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className={LoginPageTheme.labelStyle}>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className={`${LoginPageTheme.inputStyle} ${
                errors.password ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-blue-300"
              }`}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters required",
                },
              })}
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className={LoginPageTheme.buttonSubmit}
          >
            Sign In
          </button>
        </form>
        <p className={LoginPageTheme.registerMsg}>
          Don't have an account?{" "}
          <Link to="/register" className={LoginPageTheme.registerStyle}>
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
