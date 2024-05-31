import { useState } from "react";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.js";
import reactLogo from "/src/assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import About from "../About/About.jsx";
import SignInModal from "../Modals/SignInModal.jsx";
import SignUpModal from "../Modals/SignUpModal.jsx";
import RegisterConfirmationModal from "../Modals/RegisterConfirmationModal.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main__content">
        <Header
        // onCreateModal={handleCreateModal}
        // onCreateRegisterModal={handleRegisterModal}
        // onCreateSignInModal={handleSignInModal}
        // isLoggedIn={isLoggedIn}
        />

        <Route exact path="/">
          <Main
          // onSelectedCard={handleSelectedCard}
          // handleCardDelete={handleCardDelete}
          // clothingItems={clothingItems}
          // cards={clothingItems}
          // onCardLike={handleCardLike}
          />
          {/* <About /> */}
        </Route>
      </div>
      <Route path="/Articles">
        {/* <ProtectedRoute isLoggedIn={isLoggedIn} path="/Articles">
          <Articles
          // onSelectedCard={handleSelectedCard}
          // onCreateModal={handleCreateModal}
          // currentUser={currentUser}
          // isLoggedIn={isLoggedIn}
          // onChangeProfileData={handleEditProfileModal}
          // onBookMark={handleBookMark}
          // onLogOut={handleLogOut}
          />
        </ProtectedRoute> */}
      </Route>

      <Footer />
    </>
  );
}

export default App;

{
  /* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Eat Shit Corn</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/components/App/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */
}
