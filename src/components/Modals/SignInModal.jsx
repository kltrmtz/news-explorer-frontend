import ModalWithForm from "./ModalWithForm.jsx";
import { useFormWithValidation } from "/src/hooks/useForm.js";

const SigninModal = ({ isOpen, onClose, onSubmit, handleRedirectUser }) => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const { values, errors, isValid, handleChange } = useFormWithValidation({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  // console.log(isValid);

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };
  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSubmit({ email, password });
  // };

  // useEffect(() => {
  //   if (isOpen) {
  //     setEmail("");
  //     setPassword("");
  //   }
  // }, [isOpen]);

  return (
    <ModalWithForm
      buttonText="Sign In"
      title="Sign In"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      className="signIn"
      isValid={!isValid}
      handleRedirectUser={handleRedirectUser}
      linkButtonText={"Sign Up"}
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
      </div>
    </ModalWithForm>
  );
};

export default SigninModal;
