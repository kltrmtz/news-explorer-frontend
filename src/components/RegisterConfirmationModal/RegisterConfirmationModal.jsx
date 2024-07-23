import "./RegisterConfirmationModal.css";
import "/src/components/ModalWithForm/ModalWithForm.css";

const RegisterConfirmationModal = ({
  onClose,
  // linkButtonText,
  handleOverlay,
  handleRedirectUser = { handleRedirectUser },
  linkButtonText = "Sign In",
}) => {
  return (
    <div className="register__modal" onClick={handleOverlay}>
      <div className="register__modal-content">
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        />
        <h3 className="register__modal-heading">
          Registration successfully completed!
        </h3>
        <div className="modal__link">
          <button
            className="modal__link-button"
            type="button"
            onClick={handleRedirectUser}
          >
            {linkButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterConfirmationModal;
