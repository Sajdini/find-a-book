import "./Header.css";
import Sorter from "./Sorter";
import Search from "./Search";
import { BookList } from "../../App";

interface P {
  searchValue: string;
  onSearch: (e: string) => void;
  sortCriteria: keyof BookList;
  onSort: (e: keyof BookList) => void;
}

const Header = ({ searchValue, onSearch, onSort, sortCriteria }: P) => {
  return (
    <div className="header">
      <div className="header--title">
        <h1>Find a Book</h1>
      </div>
      <div className="header--filter">
        <Sorter onSort={onSort} sortCriteria={sortCriteria} />
        <Search searchValue={searchValue} onSearch={onSearch} />
      </div>
    </div>
  );
};

export default Header;
