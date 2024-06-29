import "./RegisterConfirmationModal.css";
import "./ModalWithForm.css";

const RegisterConfirmationModal = ({
  onClose,
  linkToSignIn,
  handleOverlay,
}) => {
  return (
    <div className="register__modal" onClick={handleOverlay}>
      <div className="register__modal-content">
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        />
        <div className="register__modal-heading">
          Registration successfully completed!
        </div>
        <div>
          <button
            className="modal__link modal__link-button"
            type="button"
            onClick={linkToSignIn}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterConfirmationModal;
