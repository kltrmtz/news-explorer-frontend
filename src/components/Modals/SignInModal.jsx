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
        <label className="modal__form-label">
          Email
          <input
            className="modal__form-input"
            type="text"
            name="email"
            id="modal-email-input"
            placeholder="Enter email"
            minLength="1"
            maxLength="30"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </label>
        <label className="modal__form-label">
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
        <div className="modal__buttons">
          <button className="modal__button" type="submit">
            Sign In
          </button>
          <div className="modal__link">
            or
            <button
              className="modal__link-button"
              type="button"
              onClick={linkToSignUp}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default SigninModal;
