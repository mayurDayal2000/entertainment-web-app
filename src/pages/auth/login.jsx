import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@assets/logo.svg";
import { validateEmail, validateLoginPassword } from "@/utilities/formValidator";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebase_auth } from "@/firebase/firebase.config";

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

export const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const handleBlur = (event) => {
    const { name, value } = event.target;

    let validationError = "";

    if (name === "email") {
      validationError = validateEmail(value);
    } else if (name === "password") {
      validationError = validateLoginPassword(value);
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
      password: validateLoginPassword(input.password),
    };

    setError(validations);

    if (validations.email || validations.password) return;

    try {
      const userCredential = await signInWithEmailAndPassword(firebase_auth, input.email, input.password);
      const userFound = userCredential.user;
      console.log("Login successful: ", userFound);
    } catch (err) {
      console.error(`Login failed due to ${err.message}`);
    }
  };

  const isFormValid = !error.email && !error.password && input.email && input.password;

  return (
    <div className="loginContainer">
      <img
        src={logo}
        alt="entertainment logo"
      />

      <div className="loginFormContainer">
        <h1>Login</h1>

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

          <button
            type="submit"
            style={{ marginTop: "1.5rem" }}
            disabled={!isFormValid}>
            Login to your account
          </button>
        </form>

        <p>
          Don&apos;t have an account? <Link to="/auth-signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};
