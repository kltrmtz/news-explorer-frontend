import "./SavedNewsCardList.css";
import { useContext } from "react";
import NewsCard from "../NewsCard/NewsCard";
import CurrentUserContext from "/src/contexts/CurrentUserContext.js";
import SavedCardContext from "/src/contexts/SavedCardContext.js";

const SavedNewsCardList = ({ handleCardDelete }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const { savedCards } = useContext(SavedCardContext);

  return (
    <section className="saved__cards">
      <div className="saved__cards-content">
        {savedCards
          .filter((card) => card.owner === currentUser._id)
          .map((card) => (
            <NewsCard
              cardData={card}
              // key={card._id}
              key={card.url}
              handleCardDelete={handleCardDelete}
            ></NewsCard>
          ))}
      </div>
    </section>
  );
};

export default SavedNewsCardList;
