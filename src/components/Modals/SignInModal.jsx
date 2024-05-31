import ModalWithForm from "./ModalWithForm.jsx";
import React, { useEffect, useState } from "react";

const SigninModal = ({ isOpen, onClose, onSubmit, linkToSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      buttonText="Sign In"
      title="Sign In"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      className="signIn"
    >
      <div className="modal__form">
        <label>
          Enter email
          <input
            className="modal__form-input"
            type="text"
            name="email"
            id="modal-email-input"
            placeholder="Email"
            minLength="1"
            maxLength="30"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </label>
        <label>
          Enter password
          <input
            className="modal__form-input"
            type="text"
            name="password"
            id="modal-password-input"
            placeholder="Password"
            minLength="1"
            maxLength="30"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </label>
        <div className="modal__buttons">
          <button className="modal__button" type="submit">
            Sign In
          </button>
          <button className="modal__link" type="button" onClick={linkToSignUp}>
            or Sign Up
          </button>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default SigninModal;
