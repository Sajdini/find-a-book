import "./Header.css";
import Sorter from "./Sorter";
import Search from "./Search";
import { BookList } from "../../helpers";

interface P {
  searchValue: string;
  onSearch: (e: string) => void;
  sortValue: keyof BookList;
  onSort: (e: keyof BookList) => void;
}

const Header = ({ searchValue, onSearch, onSort, sortValue }: P) => {
  return (
    <div className="header">
      <div className="header--title">
        <h1>Find a Book</h1>
      </div>
      <div className="header--filter">
        <Sorter onSort={onSort} sortValue={sortValue} />
        <Search searchValue={searchValue} onSearch={onSearch} />
      </div>
    </div>
  );
};

export default Header;
