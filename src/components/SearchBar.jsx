import { useState } from "react";
const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <>
      <form>
        <label htmlFor="">Producto</label>
        <input
          onChange={(e) => handleSearch(e)}
          type="search"
          name="search"
          id="search"
          placeholder="Reloj, TV Led..."
        />
      </form>
      <p>{searchText}</p>
    </>
  );
};

export default SearchBar;
