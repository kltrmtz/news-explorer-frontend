import "./Footer.css";
import facebook from "/src/images/fb.svg";
import github from "/src/images/github.svg";

const date = new Date().getFullYear();

const Footer = () => {
  console.log("footer");

  return (
    <footer className="footer">
      <div></div>
      <div>&copy; {date} Supersite, Powered by News API</div>
      <div className="footer__content">
        <ul className="footer__list">
          <li className="footer__list-item">
            <a href="#" className="footer__link">
              Home
            </a>
            {/* <Link to="/">
              <div className="header__link">Home</div>
            </Link> */}
          </li>
          <li className="footer__list-item">
            <a href="https://tripleten.com/" className="footer__link">
              TripleTen
            </a>
          </li>

          <li className="footer__list-item">
            <a href="https://www.facebook.com/" className="footer__link">
              <img
                src={facebook}
                alt="Facebook logo"
                className="footer__icon"
              />
            </a>
          </li>
          <li className="footer__list-item">
            <a href="https://github.com/" className="footer__link">
              <img src={github} alt="GitHub logo" className="footer__icon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
