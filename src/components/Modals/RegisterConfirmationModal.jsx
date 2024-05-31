import "./RegisterConfirmationModal.css";

const RegisterConfirmationModal = ({ onClose, linkToSignIn }) => {
  return (
    <div className="register__modal">
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
          <button className="modal__link" type="button" onClick={linkToSignIn}>
            or Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterConfirmationModal;
