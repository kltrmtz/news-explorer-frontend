import "./Header.css";
import { Link } from "react-router-dom/cjs/react-router-dom";
import logout from "/src/images/logout.svg";

const Header = ({ onCreateModal, isLoggedIn }) => {
  console.log("Header");

  return (
    <header className="header">
      <div className="header__title">
        NewsExplorer
        <div>
          {/* <Link to="/">
            <div className="header__link">Home</div>
          </Link> */}
        </div>
      </div>
      <div className="header__interactive">
        <div>
          <button
            className="header__home-button"
            type="text"
            // onClick={onCreateModal}
          >
            Home
          </button>
        </div>
        {isLoggedIn && (
          <div>
            <button
              className="header__article-button"
              type="text"
              onClick={onCreateModal}
            >
              Saved articles
            </button>
          </div>
        )}
        {!isLoggedIn && (
          <div>
            <button
              className="header__signin-button"
              type="text"
              onClick={onCreateModal}
            >
              Sign In
            </button>
          </div>
        )}
        {isLoggedIn && (
          <div>
            <button
              className="header__user-logout-button"
              type="text"
              onClick={onCloseModal}
            >
              {name}
              <img className="header__logout" src={logout} alt="logout" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
