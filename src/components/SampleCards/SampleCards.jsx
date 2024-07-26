const SampleCards = () => {
  return (
    <div className="card">
      <div className="card__content">
        <div className="card__name">Pets</div>
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
        <p className="card__date">June 26, 2024</p>
        <h3 className="card__title">
          How to Navigate Summer Holiday Travel Like a Pro
        </h3>
        <p className="card__description">
          Before you head out of town this summer, we'll tell you what to
          download, what to pack, and what to
        </p>
        <h4 className="card__owner">Wired</h4>
      </div>
    </div>
  );
};

export default SampleCards;
