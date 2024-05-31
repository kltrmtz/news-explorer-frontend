import "./SearchResults.css";
import ArticleCard from "../ArticleCard/ArticleCard.jsx";

const SearchResults = () => {
  return (
    <section className="results">
      <h2 className="results__title">Search results</h2>
      <div className="results__cards">
        <ArticleCard
        // key={item._id}
        // item={item}
        // onSelectedCard={onSelectedCard}
        // onCardSave={onCardSave}
        // isLoggedIn={isLoggedIn}
        />
      </div>
      <button className="results__button">Show more</button>
    </section>
  );
};

export default SearchResults;
