import ModalWithForm from "./ModalWithForm.jsx";
import { useFormWithValidation } from "/src/hooks/useForm.js";

const SignUpModal = ({
  isOpen,
  onClose,
  onSubmit,
  linkToSignIn,
  serverError,
  handleRedirectUser,
}) => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [name, setName] = useState("");

  // const {
  //   // register,
  //   // handleSubmit,
  //   formState: { isValid },
  // } = useForm();

  const { values, errors, isValid, handleChange } = useFormWithValidation({
    email: "",
    password: "",
    name: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  // console.log(!isValid);

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  //   console.log(e.target.value);
  // };
  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  //   console.log(e.target.value);
  // };
  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  //   console.log(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSubmit({ email, password, name });
  // };

  // useEffect(() => {
  //   if (isOpen) {
  //     setEmail("");
  //     setPassword("");
  //     setName("");
  //   }
  // }, [isOpen]);

  return (
    <ModalWithForm
      buttonText="Sign Up"
      title="Sign Up"
      onClose={onClose}
      isOpen={isOpen}
      className="register"
      onSubmit={handleSubmit}
      isValid={!isValid}
      handleRedirectUser={handleRedirectUser}
      linkButtonText={"Sign In"}
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
            // value={email}
            // onChange={handleEmailChange}
            value={values.email}
            onChange={handleChange}
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
            // value={password}
            // onChange={handlePasswordChange}
            value={values.password}
            onChange={handleChange}
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
            // value={name}
            // onChange={handleNameChange}
            value={values.name}
            onChange={handleChange}
          />
        </label>
        {/* <div className="modal__buttons">
          <button
            type="submit"
            disabled={isValid}
            className={`modal__button ${
              !isValid ? "modal__button-disabled" : ""
            }`}
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
        </div> */}
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
