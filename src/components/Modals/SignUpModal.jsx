import ModalWithForm from "./ModalWithForm.jsx";
import React, { useEffect, useState } from "react";

const SignUpModal = ({ isOpen, onClose, onSubmit, linkToSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password, name });
  };

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
      setName("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      buttonText="Sign Up"
      title="Sign Up"
      onClose={onClose}
      isOpen={isOpen}
      className="register"
      onSubmit={handleSubmit}
    >
      <div className="modal__form">
        <label>
          Email
          <input
            className="modal__form-input"
            type="text"
            name="email"
            id="modal-email-input"
            placeholder="Enter your email"
            minLength="1"
            maxLength="30"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </label>
        <label>
          Password
          <input
            className="modal__form-input"
            type="text"
            name="password"
            id="modal-password-input"
            placeholder="Enter password"
            minLength="1"
            maxLength="30"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </label>
        <label>
          Username
          <input
            className="modal__form-input"
            type="text"
            name="name"
            id="modal-name-input"
            placeholder="Enter your username"
            minLength="1"
            maxLength="30"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <div className="modal__buttons">
          <button className="modal__button" type="submit">
            Sign Up
          </button>
          <button className="modal__link" type="button" onClick={linkToSignIn}>
            or Sign in
          </button>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default SignUpModal;
