import "./search.css";
import search from "../../assets/search.png";

const Search = () => {
  return (
    <main className="search-container">
      <input type="text" placeholder="search" className="search-input" />
      <div className="search-img-div">
        <img src={search} alt="search" className="search-img" />
      </div>
    </main>
  );
};

export default Search;
