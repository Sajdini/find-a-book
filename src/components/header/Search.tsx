import { IoMdSearch } from "react-icons/io";
interface P {
  searchValue: string;
  onSearch: (e: string) => void;
}
const Search = ({ searchValue, onSearch }: P) => {
  return (
    <div className="search--container">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search..."
        className="input"
      />
      {!searchValue && <IoMdSearch className="search--icon" />}
    </div>
  );
};

export default Search;
