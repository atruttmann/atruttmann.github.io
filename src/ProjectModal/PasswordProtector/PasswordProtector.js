import React, { useState } from "react";
import { FaLock, FaExclamationCircle } from "react-icons/fa";
import "./PasswordProtector.scss";

const PasswordProtector = ({ authenticate = () => {} }) => {
  const [userInput, setUserInput] = useState("");
  const [showError, setShowError] = useState(false);

  return (
    <div className="passwordContainer">
      <FaLock className="passwordIcon" />
      <p className="body2">
        Sorry, viewing this work requires a password.
        <br />
        Please <a href="mailto:amtruttmann@gmail.com">reach out</a> to me to
        access this project.
      </p>

      <div className="formContainer">
        <form
          className="passwordForm"
          onSubmit={(e) => {
            setShowError(!authenticate(userInput));
            e.preventDefault();
          }}
        >
          <input
            type="text"
            autoComplete="username"
            style={{ display: "none" }}
          />
          <input
            id="passwordInput"
            value={userInput}
            type="password"
            placeholder="Password"
            aria-label="Password"
            className="passwordInput"
            onChange={(e) => setUserInput(e.target.value)}
            name="password"
            autoComplete="current-password"
          />
          <input type="submit" value="Log in" className="passwordButton" />
        </form>
        <div
          className="passwordError"
          style={
            showError ? { visibility: "visible" } : { visibility: "hidden" }
          }
        >
          <FaExclamationCircle className="passwordWarning" />
          <p className="body3">Whoops, looks like this password is invalid</p>
        </div>
      </div>
    </div>
  );
};

export default PasswordProtector;
