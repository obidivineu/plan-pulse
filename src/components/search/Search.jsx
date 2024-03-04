import "./search.css";
import search from "../../assets/search.png";
import { useRef } from "react";
import axios from "axios";

const Search = () => {
  const searchRef = useRef(null);

  const handleSearch = async () => {
    const response = await axios.get(
      `https://planpulse.onrender.com/getOneMember/:${searchRef.current.value}`
    );

    console.log(response.data);
  };
  return (
    <main className="search-container">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="search"
          className="search-input"
          ref={searchRef}
        />
        <button className="search-img-div" type="submit">
          <img src={search} alt="search" className="search-img" />
        </button>
      </form>
    </main>
  );
};

export default Search;
