import "./NewsCard.css";
import bookmark from "/src/images/bookmark.svg";
import bookmarked from "/src/images/bookmarked.svg";
import bookmarkhover from "/src/images/bookmarkhover.svg";
import trash from "/src/images/trash.svg";
import trashhover from "/src/images/trashhover.svg";
// import cardimage from "/src/images/image_08.svg";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CurrentPageContext from "/src/contexts/CurrentPageContext.js";
import CurrentUserContext from "/src/contexts/CurrentUserContext.js";
import KeywordContext from "/src/contexts/KeywordContext.js";
import SavedCardContext from "/src/contexts/SavedCardContext.js";

const NewsCard = ({
  cardData,
  handleCardSave,
  handleCardDelete,
  item,
  onSelectedCard,
  isLoggedIn,
  onSignIn,
}) => {
  const { currentPage, setCurrentPage } = useContext(CurrentPageContext);
  // const { isLoggedIn } = useContext(CurrentUserContext);
  const { keyword } = useContext(KeywordContext);
  const { savedCards, setSavedCards } = useContext(SavedCardContext);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  // const id = image._id;

  const isSaved = savedCards.find((article) => {
    article.link === cardData.url;
  });

  const cardButtonClassName = `${
    isSaved
      ? "card__save-button card__save-button_active"
      : "card__delete-button"
  }`;

  // const isLiked = item.likes.some((id) => {
  //   return id === currentUser?._id;
  // });

  // const itemSaveButtonClassName = `${
  //   isSaved ? "card__save-button card__save-button_active" : "card__save-button"
  // }`;

  const handleBookmark = () => {
    // handleSave(id, isSaved);
    const token = localStorage.getItem("jwt");
    handleCardSave({ keyword, cardData, token, isSaved });
  };

  const handleBookmarkDelete = () => {
    const token = localStorage.getItem("jwt");
    handleCardDelete({ cardData, token });
  };

  // const currentDate = new Date().toLocaleString("default", {
  //   month: "long",
  //   day: "numeric",
  // });

  const publicationDate = new Date(
    cardData.publishedAt || cardData.date
  ).toLocaleString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // const onCardClick = () => {
  //   onSelectedCard(item);
  // };

  // useEffect(() => {
  //   const jwt = localStorage.getItem("jwt");
  //   getSavedCards(jwt).then(() => {
  //     setSavedCards(savedCards);
  //   });
  // }, [getSavedCards]);

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname, setCurrentPage]);

  return (
    <section className="card">
      <div className="card__content">
        {isLoggedIn && currentPage === "/" && (
          <button className={cardButtonClassName} onClick={handleBookmark} />
        )}
        {!isLoggedIn && (
          <>
            <div
              className={`card__message ${
                isHovered ? "" : "card__message_hidden"
              }`}
            >
              Sign in to save articles
            </div>
            <button
              // className="bookmark"
              className="card__save-button"
              src={bookmark}
              onClick={onSignIn}
              onMouseOver={() => {
                setIsHovered(true);
              }}
              onMouseOut={() => {
                setIsHovered(false);
              }}
            />
          </>
        )}
        {currentPage === "/saved-news" && (
          <>
            <div className="card__keyword">{cardData.keyword}</div>
            <div
              className={`card__message ${
                isHovered ? "" : "card__message_hidden"
              }`}
            >
              Remove from saved
            </div>
            <button
              className="card__delete-button"
              src={trash}
              onClick={handleBookmarkDelete}
              onMouseOver={() => {
                setIsHovered(true);
              }}
              onMouseOut={() => {
                setIsHovered(false);
              }}
            />
          </>
        )}
        <img
          className="card__image"
          src={cardData.image || cardData.urlToImage}
          alt={cardData.link || cardData.url}
        />
        <div className="card__text">
          <h3 className="card__title">{cardData.title}</h3>
          <p className="card__date">{publicationDate}</p>
          <p className="card__description">
            {cardData.text || cardData.description}
          </p>
          {cardData.source && (
            <p className="card__source">
              {cardData.source.name || cardData.source}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsCard;

// return (
//   <div className="card">
//     <div className="card__content">
//       <div className="card__name">Nature</div>
//       <button
//         className="card__delete-button"
//         // className={itemSaveButtonClassName}
//         // onClick={handleBookmark}
//       >
//         {/* src={bookmark} */}
//       </button>

//       <img
//         // src={image.imageUrl}
//         // className="card__image"
//         // onClick={onCardClick}
//         // alt={card.name}
//         src={cardimage}
//       />
//       <button className="card__delete-button" onClick={handleDelete}></button>
//       <p className="card__date">November 4, 2020</p>
//       <h3 className="card__title">
//         Everyone Needs a Special 'Sit Spot' in Nature
//       </h3>
//       <p className="card__description">
//         Ever since I read Richard Louv's influential book, "Last Child in the
//         Woods," the idea of having a special "sit spot" has stuck with me.
//         This advice, which Louv attributes to nature educator Jon Young, is
//         for both adults and children to find...
//       </p>
//       <h4 className="card__owner">TREEHUGGER</h4>
//     </div>
//   </div>
// );
