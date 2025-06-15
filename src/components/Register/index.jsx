import React from "react";
import { useForm } from "react-hook-form";
import { RegisterLightTheme, RegisterDarkTheme } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { addLoggedInData } from "../../redux/reducer";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector((store) => store.userStore.isDarkTheme);
  const RegisterPageTheme =selector? RegisterDarkTheme: RegisterLightTheme;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(" HElls", data);
    dispatch(addLoggedInData(data));
    navigate('/');
  };

  return (
    <div className={RegisterPageTheme.container}>
      <div className={RegisterPageTheme.wrapper}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={RegisterPageTheme.formSTyle}
      >
        <h2 className={RegisterPageTheme.h2Style}>Registration Form</h2>

        <div className="mb-4">
          <label className={RegisterPageTheme.labelStyle}>
            Name
          </label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className={`${RegisterPageTheme.inputSTyle} ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className={RegisterPageTheme.labelStyle}>
            Email
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Email is not valid" },
            })}
            className={`${RegisterPageTheme.inputSTyle} ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className={RegisterPageTheme.labelStyle}>
            Password
          </label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className={`${RegisterPageTheme.inputSTyle} ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-xs">{errors.password.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className={RegisterPageTheme.labelStyle}>
            Confirm Password
          </label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
            className={`${RegisterPageTheme.inputSTyle} ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className={RegisterPageTheme.labelStyle}>Age</label>
          <input
            type="number"
            {...register("age", {
              required: "Age is required",
              min: { value: 1, message: "Age must be greater than 0" },
            })}
            className={`${RegisterPageTheme.inputSTyle} ${
              errors.age ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.age && (
            <p className="text-red-500 text-xs">{errors.age.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className={RegisterPageTheme.labelStyle}>
            Mobile Number
          </label>
          <input
            type="tel"
            {...register("mobile", {
              required: "Mobile number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Mobile number must be 10 digits",
              },
            })}
            className={`${RegisterPageTheme.inputSTyle} ${
              errors.mobile ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.mobile && (
            <p className="text-red-500 text-xs">{errors.mobile.message}</p>
          )}
        </div>

        <button
          type="submit"
          className={RegisterPageTheme.buttonStyle}
        >
          Submit
        </button>
      </form>{" "}
      </div>
    </div>
  );
};

export default RegisterPage;
