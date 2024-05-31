import "./Main.css";
import { useMemo, useContext } from "react";
import About from "../About/About.jsx";
import SearchField from "../SearchFieldForm/SearchFieldForm.jsx";
import SearchResults from "../SearchResults/SearchResults.jsx";
import Preloader from "../Preloader/Preloader.jsx";
import NothingFound from "../NothingFound/NothingFound.jsx";

const Main = ({ onSelectedCard, onCardLike, isLoggedIn }) => {
  return (
    <main className="main">
      <section className="main__search">
        <div className="main__search-content">
          <h1 className="main__title">What's going on in the world? </h1>
          <p className="main__description">
            Find the latest news on any topic and save them in your personal
            account.
          </p>
          <SearchField />
          {/* {filteredCards.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              onSelectedCard={onSelectedCard}
              onCardLike={onCardLike}
              isLoggedIn={isLoggedIn}
            />
          ))} */}
        </div>
      </section>
      <section className="main__results">
        <Preloader />
        <SearchResults />
        <NothingFound />
      </section>
      <section className="main__about">
        <About />
      </section>
    </main>
  );
};

export default Main;
