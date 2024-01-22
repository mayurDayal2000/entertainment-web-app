import searchIcon from "../../assets/icon-search.svg";

// eslint-disable-next-line react/prop-types
export const SearchPanel = ({ placeholder }) => {
  return (
    <search className="searchPanel">
      <form>
        <img
          src={searchIcon}
          alt="search icon"
        />

        <input
          type="search"
          placeholder={placeholder}
          name="search"
        />
      </form>
    </search>
  );
};
