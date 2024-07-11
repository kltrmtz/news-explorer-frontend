import "./MobileModal.css";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useContext } from "react";
import logout from "/src/images/logout.svg";
import CurrentPageContext from "/src/contexts/CurrentPageContext.js";
import CurrentUserContext from "/src/contexts/CurrentUserContext.js";

const MobileModal = ({
  onClose,
  onCreateModal,
  onCreateSignInModal,
  isLoggedIn,
  onLogOut,
}) => {
  const { currentUser } = useContext(CurrentUserContext);
  const { currentPage } = useContext(CurrentPageContext);

  return isLoggedIn && currentPage === "/" ? (
    <div className="modal__mobile">
      <div className="mobile__content">
        <div className="mobile__header">
          <Link to="/">
            <button type="text" className="mobile__title">
              NewsExplorer
            </button>
          </Link>

          <button
            className="mobile__close-button"
            type="button"
            onClick={onClose}
          />
        </div>
        <div className="mobile__buttons">
          <Link to="/">
            <button
              className="mobile__home-button"
              type="text"
              onClick={onCreateModal}
            >
              Home
            </button>
          </Link>
          <Link to="/saved-news">
            <button
              className="mobile__article-button"
              type="text"
              onClick={onCreateModal}
            >
              Saved articles
            </button>
          </Link>
          <button
            className="mobile__user-logout-button"
            type="text"
            onClick={onLogOut}
          >
            {currentUser.name}
            <img className="mobile__logout" src={logout} alt="logout" />
          </button>
        </div>
      </div>
    </div>
  ) : isLoggedIn && currentPage === "/saved-news" ? (
    <div className="modal__mobile">
      <div className="mobile__content">
        <div className="mobile__header">
          <Link to="/">
            <button type="text" className="mobile__title">
              NewsExplorer
            </button>
          </Link>

          <button
            className="mobile__close-button"
            type="button"
            onClick={onClose}
          />
        </div>
        <div className="mobile__buttons">
          <Link to="/">
            <button
              className="mobile__home-button"
              type="text"
              onClick={onCreateModal}
            >
              Home
            </button>
          </Link>
          <Link to="/saved-news">
            <button
              className="mobile__article-button"
              type="text"
              onClick={onCreateModal}
            >
              Saved articles
            </button>
          </Link>
          <button
            className="mobile__user-logout-button"
            type="text"
            onClick={onLogOut}
          >
            {currentUser.name}
            <img className="mobile__logout" src={logout} alt="logout" />
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="modal__mobile">
      <div className="mobile__content">
        <div className="mobile__header">
          <Link to="/">
            <button type="text" className="mobile__title">
              NewsExplorer
            </button>
          </Link>

          <button
            className="mobile__close-button"
            type="button"
            onClick={onClose}
          />
        </div>
        <div className="mobile__buttons">
          <Link to="/">
            <button
              className="mobile__home-button"
              type="text"
              onClick={onCreateModal}
            >
              Home
            </button>
          </Link>
          <button
            className="mobile__signin-button"
            type="button"
            onClick={onCreateSignInModal}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileModal;
