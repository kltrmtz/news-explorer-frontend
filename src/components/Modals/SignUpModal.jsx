import ModalWithForm from "./ModalWithForm.jsx";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const SignUpModal = ({
  isOpen,
  onClose,
  onSubmit,
  linkToSignIn,
  serverError,
}) => {
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

  const {
    // register,
    // handleSubmit,
    formState: { isValid },
  } = useForm();

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
      isValid={isValid}
    >
      <div className="modal__form">
        <label className="modal__form-label">
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
        <label className="modal__form-label">
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
          <button
            className="modal__button : modal__button-disabled"
            type="submit"
            disabled={!isValid}
          >
            Sign Up
          </button>
          <div className="modal__link">
            or
            <button
              className="modal__link-button"
              type="button"
              onClick={linkToSignIn}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default SignUpModal;

// import { useForm } from 'react-hook-form';

// function App() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   return (
//     <form onSubmit={handleSubmit((data) => console.log(data))}>
//       <input {...register('firstName')} />
//       <input {...register('lastName', { required: true })} />
//       {errors.lastName && <p>Last name is required.</p>}
//       <input {...register('age', { pattern: /\d+/ })} />
//       {errors.age && <p>Please enter number for age.</p>}
//       <input type="submit" />
//     </form>
//   );
// }
