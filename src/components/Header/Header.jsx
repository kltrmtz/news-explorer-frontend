import "./Header.css";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useContext } from "react";
import CurrentPageContext from "/src/contexts/CurrentPageContext.js";
import CurrentUserContext from "/src/contexts/CurrentUserContext.js";
import logout from "/src/images/logout.svg";
import logoutSaved from "/src/images/logoutblk.svg";
import stroke from "/src/images/stroke.svg";
import strokeSaved from "/src/images/strokeblk.svg";
import mobileMenu from "/src/images/menu.svg";
import mobileMenuSaved from "/src/images/menublk.svg";

const Header = ({
  onCreateModal,
  onCreateSignInModal,
  isLoggedIn,
  onLogOut,
}) => {
  const { currentUser } = useContext(CurrentUserContext);
  const { currentPage } = useContext(CurrentPageContext);

  console.log("Header");

  return (
    <header className="header">
      <Link to="/">
        <button type="text" className="header__title">
          NewsExplorer
        </button>
      </Link>

      {isLoggedIn && currentPage === "/" ? (
        <div className="header__interactive">
          <div className="header__home-content">
            <Link to="/">
              <button
                className="header__home-button"
                type="text"
                onClick={onCreateModal}
              >
                Home
              </button>
            </Link>
            <img
              className="header__home-stroke"
              alt="stroke"
              src={stroke}
            ></img>
          </div>
          <div className="header__article-content">
            <Link to="/saved-news">
              <button
                className="header__article-button"
                type="text"
                onClick={onCreateModal}
              >
                Saved articles
              </button>
            </Link>
            <img
              className="header__article-stroke"
              alt="stroke"
              src={strokeSaved}
            ></img>
          </div>
          <div>
            <button
              className="header__user-logout-button"
              type="text"
              onClick={onLogOut}
            >
              {currentUser.name}
              <img className="header__logout" src={logout} alt="logout" />
            </button>
          </div>
        </div>
      ) : (
        <div className="header__interactive">
          <div className="header__home-content">
            <Link to="/">
              <button
                className="header__home-button"
                type="text"
                onClick={onCreateModal}
              >
                Home
              </button>
            </Link>
            <img
              className="header__home-stroke"
              alt="stroke"
              src={stroke}
            ></img>
          </div>

          <div>
            <button
              className="header__signin-button"
              type="text"
              onClick={onCreateSignInModal}
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
