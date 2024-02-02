import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@assets/logo.svg";

// eslint-disable-next-line react/prop-types
const InputField = ({ type, id, label, value, error, onChange }) => (
  <div className="inputGroup">
    <input
      type={type}
      id={id}
      name={id}
      className={error ? "error-input" : ""}
      placeholder={label}
      value={value}
      onChange={onChange}
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: "" }));
  };

  const validateEmail = (email) => {
    const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!email) {
      return "Can`t be empty";
    }

    if (!emailPattern.test(email)) {
      return "Not a valid email";
    }

    return "";
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const emailError = validateEmail(input.email);
    const passwordError = input.password ? "" : "Can`t be empty";

    setError(() => ({ email: emailError, password: passwordError, repeatPassword: passwordError }));

    if (!emailError && !passwordError) {
      console.log("data submitted");
    } else {
      console.log("Error found!");
    }
  };

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
          />

          <InputField
            type="password"
            id="password01"
            label="Password"
            value={input.password}
            error={error.password}
            onChange={handleChange}
          />

          <InputField
            type="password"
            id="password02"
            label="Repeat Password"
            value={input.password}
            error={error.password}
            onChange={handleChange}
          />

          <button
            type="submit"
            style={{ cursor: error.email || error.password ? "not-allowed" : "pointer", marginTop: "1.5rem" }}>
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