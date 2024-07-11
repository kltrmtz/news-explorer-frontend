import "./ModalWithForm.css";
import { useForm } from "react-hook-form";

const ModalWithForm = ({
  children,
  title,
  name,
  onClose,
  onSubmit,
  handleOverlay,
  buttonText,
  // disabled = { isValid },
}) => {
  return (
    <div className={`modal modal_type_${name}`} onClick={handleOverlay}>
      <div className="modal__content">
        <form onSubmit={onSubmit}>
          <h3 className="modal__heading">{title}</h3>
          <button
            className="modal__close-button"
            type="button"
            onClick={onClose}
          />
          {children}
          {/* <button
            type="submit"
            disabled={!isValid}
            className={`modal__button ${
              isValid === true ? "modal__button-disabled" : ""
            }`}
          >
            {buttonText}
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
