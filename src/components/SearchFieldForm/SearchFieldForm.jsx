import "./SearchFieldForm.css";

const SearchField = ({ handleSearch }) => {
  const handleSearchButton = ({ keyword }) => {
    handleSearch({ keyword });
  };

  return (
    <div className="searchField">
      <form className="searchField__form" onSubmit={handleSearchButton}>
        <input
          className="searchField__input"
          type="search"
          placeholder="Enter topic"
        />
        <button className="searchField__button" onClick={handleSearch}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchField;
