import "./SearchForm.css";
import { useForm } from "react-hook-form";

const SearchForm = ({ handleSearch }) => {
  const { handleSubmit } = useForm();

  const handleSearchButton = ({ keyword }) => {
    handleSearch({ keyword });
  };

  return (
    <div className="searchField">
      <form
        className="searchField__form"
        // onSubmit={handleSearchButton}
        onSubmit={handleSubmit(handleSearchButton)}
      >
        <input
          className="searchField__input"
          type="search"
          placeholder="Enter topic"
        />
        <button
          className="searchField__button"
          type="submit"
          onSubmit={handleSearch}
          // onSearch={handleSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
