import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.js";
import SearchedContext from "/src/contexts/SearchedContext.js";
import CurrentPageContext from "/src/contexts/CurrentPageContext.js";
import CurrentUserContext from "/src/contexts/CurrentUserContext.js";
import KeywordContext from "/src/contexts/KeywordContext.js";
import SavedCardContext from "/src/contexts/SavedCardContext.js";
import SearchResultsContext from "/src/contexts/SearchResultsContext.js";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import SavedNews from "../SavedNews/SavedNews.jsx";
import Footer from "../Footer/Footer.jsx";
import SignInModal from "../Modals/SignInModal.jsx";
import SignUpModal from "../Modals/SignUpModal.jsx";
import RegisterConfirmationModal from "../Modals/RegisterConfirmationModal.jsx";
// import api from "/src/utils/api.js";
// import auth from "/src/utils/auth.js";
import {
  getSavedCards,
  saveArticle,
  getCards,
  articles,
} from "/src/utils/api.js";
import { authorize, checkToken } from "/src/utils/auth.js";
import { getSearchResults } from "/src/utils/newsApi.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";
import { setToken, getToken } from "/src/utils/token.js";
import NewsCardList from "../NewsCardList/NewsCardList.jsx";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [searching, setSearching] = useState(false);
  const [searched, setSearched] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [count, setCount] = useState(0);
  const [savedCards, setSavedCards] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("");
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    _id: "",
  });
  const [keyword, setKeyword] = useState("");
  const location = useLocation();

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleDeleteModal = () => {
    setActiveModal("delete");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleRegisterModal = () => {
    setActiveModal("confirm");
  };

  const handleSignUpModal = () => {
    setActiveModal("register");
  };

  const handleSignInModal = () => {
    setActiveModal("login");
  };

  // handle redirect user

  const handleRedirectUser = () => {
    activeModal === "register"
      ? setActiveModal("login")
      : setActiveModal("register");
  };

  // handle card delete

  const handleCardDelete = () => {
    const token = localStorage.getItem("jwt");
    api
      .deleteCards(selectedCard._id, token)
      .then(() => {
        setClothingItems((cards) =>
          cards.filter((card) => card._id !== selectedCard._id)
        );
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // handle register

  const handleSignUpSubmit = ({ email, password, name }) => {
    auth
      .register({ email, password, name })
      .then((data) => {
        handleSignInSubmit({ email, password });
        console.log(data);
        handleCloseModal();
      })

      .catch((err) => {
        console.log(err);
      });
  };

  // handle current user

  // const handleCurrentUser = () => {
  //   const jwt = localStorage.getItem("jwt");
  //   auth
  //     .getCurrentUser(jwt)
  //     .then(({ name, email, _id }) => {
  //       setIsLoggedIn(true);
  //       setCurrentUser({ name, email, _id });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // handle Login Logout

  // const handleLogin = (userData) => {
  //   setIsLoggedIn(true);
  //   handleCurrentUser(userData);
  // };

  // const handleSignInSubmit = ({ email, password }) => {
  //   setLoading(true);
  //   auth
  //     .login({ email, password })

  //     .then((res) => {
  //       localStorage.setItem("jwt", res.token);
  //       handleLogin(res);
  //       handleCloseModal();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // };

  const handleLogOut = () => {
    setIsLoggedIn(false);

    setCurrentUser({});

    localStorage.removeItem("jwt");
  };

  // handle new login new submit sub out

  const handleSubmit = (request) => {
    setLoading(true);
    request()
      .then(() => {
        if (activeModal === "registerModal") {
          setServerError(false);
        } else {
          setServerError(false);
          handleCloseModal();
        }
      })
      .catch((error) => {
        console.log(error);
        setServerError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleLogin = (email, password) => {
    setLoading(true);
    authorize(email, password)
      .then((res) => {
        if (res) {
          localStorage.setItem("jwt", res.token);
          checkToken(res.token).then((data) => {
            setCurrentUser(data);
            setIsLoggedIn(true);
          });
        }
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // handle search

  // const handleSearch = ({ keyword }) => {
  //   setKeyword(keyword);
  //   setSearching(true);
  //   getSearchResults(keyword)
  //     .then((res) => {
  //       console.log(res);
  //       setSearchResults(res.articles);
  //       setSearched(true);
  //       setSearching(false);
  //       setSearchError(false);
  //       setIsSaved(true);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setSearchError(true);
  //     });
  // };

  // handle search subout

  const handleSearch = ({ keyword }) => {
    setKeyword(keyword);
    setSearching(true);
    getCards(keyword)
      .then((res) => {
        console.log(res);
        setSearchResults(res.articles);
        setSearched(true);
        setSearching(false);
        setSearchError(false);
        setIsSaved(true);
      })
      .catch((err) => {
        console.log(err);
        setSearchError(true);
      });
  };

  // handle card save unsave

  const handleCardSave = (id, isSaved) => {
    const token = localStorage.getItem("jwt");
    !isSaved
      ? api
          .addCardSave(id, token)
          .then((updatedCard) => {
            setSavedCards((cards) =>
              cards.map((item) =>
                item._id === updatedCard.data._id ? updatedCard.data : item
              )
            );
          })
          .catch((err) => console.log(err))
      : api
          .removeCardSave(id, token)
          .then((updatedCard) => {
            setSavedCards((cards) =>
              cards.map((item) =>
                item._id === updatedCard.data._id ? updatedCard.data : item
              )
            );
          })
          .catch((err) => console.log(err));
  };

  // use effects

  // useEffect((userData) => {
  //   const jwt = localStorage.getItem("jwt");
  //   if (!jwt) {
  //     return;
  //   }
  //   auth;
  //   handleCurrentUser(userData);
  // }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    const handleOverlay = (e) => {
      if (e.target.classList.contains("modal")) {
        handleCloseModal();
      }
    };
    document.addEventListener("click", handleOverlay);
    return () => document.removeEventListener("click", handleOverlay);
  }, []);

  // new

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);
  console.log(savedCards);

  // useEffect(() => {
  //   const jwt = localStorage.getItem("jwt");

  //   if (!jwt) {
  //     return;
  //   }
  //   auth
  //     .getCurrentUser(jwt)
  //     .then(({ name, email, _id }) => {
  //       setIsLoggedIn(true);
  //       setCurrentUser({ name, email, _id });
  //     })
  //     .then(() => {
  //       getSavedCards(jwt).then((articles) => {
  //         setSavedCards(articles);
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [isLoggedIn]);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      checkToken("jwt", jwt)
        .then((res) => {
          if (res && res.data) {
            setCurrentUser(res.data);
            setIsLoggedIn(true);
          }
        })

        .then(() => {
          getSavedCards(jwt).then((articles) => {
            setSavedCards(articles);
          });
        })
        // .then(() => {
        //   getSavedArticles(jwt).then((articles) => {
        //     setSavedArticles(articles);
        //   });
        // })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isLoggedIn]);

  // old

  return (
    <CurrentPageContext.Provider
      value={{ currentPage, setCurrentPage, activeModal }}
    >
      <CurrentUserContext.Provider value={{ currentUser, isLoggedIn }}>
        <SearchedContext.Provider value={searched}>
          <SearchResultsContext.Provider value={searchResults}>
            <SavedCardContext.Provider value={{ savedCards, setSavedCards }}>
              <KeywordContext.Provider value={{ keyword, setKeyword }}>
                <div className="page">
                  <div className="main__content">
                    <Header
                      onCreateModal={handleCreateModal}
                      onCreateRegisterModal={handleRegisterModal}
                      onCreateSignInModal={handleSignInModal}
                      isLoggedIn={isLoggedIn}
                      onLogOut={handleLogOut}
                    />

                    <Route exact path="/">
                      <Main
                        isLoggedIn={isLoggedIn}
                        onSelectedCard={handleSelectedCard}
                        handleCardDelete={handleCardDelete}
                        // clothingItems={clothingItems}
                        // cards={clothingItems}

                        handleSearch={handleSearch}
                        loading={searching}
                        searchError={searchError}
                        onCardSave={handleCardSave}
                        onSignIn={handleSignInModal}
                      />
                      <NewsCardList />
                    </Route>
                  </div>
                  <Route path="/saved-news">
                    <ProtectedRoute isLoggedIn={isLoggedIn} path="/saved-news">
                      <SavedNews
                        onSelectedCard={handleSelectedCard}
                        handleCardDelete={handleCardDelete}
                        onCreateModal={handleCreateModal}
                        currentUser={currentUser}
                        // onChangeProfileData={handleEditProfileModal}
                        // onBookMark={handleBookMark}
                        onLogOut={handleLogOut}
                        isSaved={isSaved}
                      />
                    </ProtectedRoute>
                  </Route>

                  <Footer />
                  {activeModal === "confirm" && (
                    <RegisterConfirmationModal
                      onCreateModal={handleDeleteModal}
                      onClose={handleCloseModal}
                      isOpen={activeModal === "confirm"}
                      handleCardDelete={handleCardDelete}
                    />
                  )}
                  {activeModal === "register" && (
                    <SignUpModal
                      onCreateModal={handleSignUpModal}
                      onClose={handleCloseModal}
                      isOpen={activeModal === "register"}
                      // onSubmit={handleSignUpSubmit}
                      linkToSignIn={handleRedirectUser}
                      loading={loading}
                    />
                  )}
                  {activeModal === "login" && (
                    <SignInModal
                      onCreateModal={handleSignInModal}
                      onClose={handleCloseModal}
                      isOpen={activeModal === "login"}
                      // onSubmit={handleSignInSubmit}
                      linkToSignUp={handleRedirectUser}
                      loading={loading}
                      onSubmit={handleLogin}
                    />
                  )}
                </div>
              </KeywordContext.Provider>
            </SavedCardContext.Provider>
          </SearchResultsContext.Provider>
        </SearchedContext.Provider>
      </CurrentUserContext.Provider>
    </CurrentPageContext.Provider>
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
      <h1>Hello World</h1>
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
