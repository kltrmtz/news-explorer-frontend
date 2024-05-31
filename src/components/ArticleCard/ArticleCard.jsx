import "./ArticleCard.css";
import bookmark from "/src/images/bookmark.svg";
import bookmarked from "/src/images/bookmarked.svg";
import bookmarkhover from "/src/images/bookmarkhover.svg";
import trash from "/src/images/trash.svg";
import trashhover from "/src/images/trashhover.svg";
import cardimage from "/src/images/image_08.svg";

const ArticleCard = ({
  handleSave,
  handleDelete,
  item,
  onSelectedCard,
  isLoggedIn,
}) => {
  // const currentUser = useContext(CurrentUserContext);
  // const id = image._id;

  // const isSaved = item.saved.some((id) => {
  //   return id === currentUser?._id;
  // });

  // const itemSaveButtonClassName = `${
  //   isSaved ? "card__save-button card__save-button_active" : "card__save-button"
  // }`;

  const handleBookmark = () => {
    handleSave(id, isSaved);
  };

  const onCardClick = () => {
    onSelectedCard(item);
  };
  return (
    <div className="card">
      <div className="card__content">
        <div className="card__name">Nature</div>
        <button
          className="card__delete-button"
          // className={itemSaveButtonClassName}
          // onClick={handleBookmark}
        >
          {/* src={bookmark} */}
        </button>

        <img
          // src={image.imageUrl}
          // className="card__image"
          // onClick={onCardClick}
          // alt={card.name}
          src={cardimage}
        />
        <button className="card__delete-button" onClick={handleDelete}></button>
        <p className="card__date">November 4, 2020</p>
        <h3 className="card__title">
          Everyone Needs a Special 'Sit Spot' in Nature
        </h3>
        <p className="card__description">
          Ever since I read Richard Louv's influential book, "Last Child in the
          Woods," the idea of having a special "sit spot" has stuck with me.
          This advice, which Louv attributes to nature educator Jon Young, is
          for both adults and children to find...
        </p>
        <h4 className="card__owner">TREEHUGGER</h4>
      </div>
    </div>
  );
};

export default ArticleCard;
