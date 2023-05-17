import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, and message
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setName("");
      setMessage("");
      setEmail("");
      setErrorMessage("The message was submitted successfully!");
    }
  };

  // If everything goes according to plan, we want to clear out the input after a successful registration.

  return (
    <div>
      <div className="title container">
        <h2>Contact</h2>
      </div>
      <form className="container text">
        <div className="form-outline mb-4">
          <label className="form-label" for="formName">
            Name
          </label>
          <input
            type="name"
            id="formName"
            className="form-control"
            value={name}
            name="name"
            onChange={handleInputChange}
            onBlur={function () {
              if (!name) {
                setErrorMessage("Name is required");
                return;
              }
              setErrorMessage("");
              return;
            }}
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" for="formEmail">
            Email address
          </label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            id="formEmail"
            className="form-control"
            onBlur={function () {
              if (!email) {
                setErrorMessage("Email is required");
                return;
              } else if (!validateEmail(email)) {
                setErrorMessage("Email is invalid");
                return;
              }
              setErrorMessage("");
              return;
            }}
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" for="formMessage">
            Message
          </label>
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            className="form-control"
            id="formMessage"
            rows="4"
            onBlur={function () {
              if (!message) {
                setErrorMessage("Message is required");
                return;
              }
              setErrorMessage("");
              return;
            }}
          ></textarea>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button
          type="submit"
          onClick={handleFormSubmit}
          className="btn btn-primary btn-block mb-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
