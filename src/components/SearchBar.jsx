import "./SearchBar.css";
const SearchBar = ({ onChangeText }) => {
  return (
    <>
      <form>
        <label htmlFor="">Buscar </label>
        <input
          onChange={onChangeText}
          type="search"
          name="search"
          id="search"
          placeholder="jacket, led tv, etc..."
        />
      </form>
    </>
  );
};

export default SearchBar;
