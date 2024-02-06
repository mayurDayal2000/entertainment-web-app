import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@assets/logo.svg";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebase_auth } from "@/firebase/firebase.config";
import { validateEmail, validatePassword, validateRepeatPassword } from "@/utilities/formValidator";

// eslint-disable-next-line react/prop-types
const InputField = ({ type, id, label, value, error, onChange, onBlur, onFocus }) => (
  <div className="inputGroup">
    <input
      type={type}
      id={id}
      name={id}
      className={error ? "error-input" : ""}
      placeholder={label}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      required
    />
    <label htmlFor={id}>{label}</label>
    {error && <span>{error}</span>}
  </div>
);

export const Signup = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleBlur = (event) => {
    const { name, value } = event.target;

    let validationError = "";

    if (name === "email") {
      validationError = validateEmail(value);
    } else if (name === "password") {
      validationError = validatePassword(value);
    } else if (name === "repeatPassword") {
      validationError = validateRepeatPassword(input.password, value);
    }

    setError((prev) => ({ ...prev, [name]: validationError }));
  };

  const handleFocus = (event) => {
    const { name } = event.target;

    setError((prev) => ({ ...prev, [name]: "" }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const validations = {
      email: validateEmail(input.email),
      password: validatePassword(input.password),
      repeatPassword: validateRepeatPassword(input.password, input.repeatPassword),
    };

    setError(validations);

    if (validations.email || validations.password || validations.repeatPassword) return;

    try {
      const userCredential = await createUserWithEmailAndPassword(firebase_auth, input.email, input.password);
      const userFound = userCredential.user;
      console.log("Signup successful: ", userFound);
    } catch (err) {
      console.error("Signup error: ", error);
    }
  };

  const isFormValid = !error.email && !error.password && !error.repeatPassword && input.email && input.password && input.repeatPassword;

  return (
    <div className="loginContainer">
      <img
        src={logo}
        alt="entertainment logo"
      />

      <div className="loginFormContainer">
        <h1>Sign Up</h1>

        <form
          onSubmit={handleFormSubmit}
          noValidate>
          <InputField
            type="email"
            id="email"
            label="Email address"
            value={input.email}
            error={error.email}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />

          <InputField
            type="password"
            id="password"
            label="Password"
            value={input.password}
            error={error.password}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />

          <InputField
            type="password"
            id="repeatPassword"
            label="Repeat Password"
            value={input.repeatPassword}
            error={error.repeatPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />

          <button
            type="submit"
            style={{ marginTop: "1.5rem" }}
            disabled={!isFormValid}>
            Create an account
          </button>
        </form>

        <p>
          Alread have an account? <Link to="/auth-login">Login</Link>
        </p>
      </div>
    </div>
  );
};
