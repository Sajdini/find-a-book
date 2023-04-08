import { useState } from "react";
import { BookList, keysArray } from "../../App";
import { IoMdArrowDropdown, IoMdClose } from "react-icons/io";
import "./Header.css";

interface P {
  onSort: (e: keyof BookList) => void;
  sortCriteria: keyof BookList;
}

const Sorter = ({ onSort, sortCriteria }: P) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  return (
    <div className="dropdown">
      <div
        role="button"
        className="dropdown--button"
        onClick={() => setDropDownOpen((isOpen) => !isOpen)}
      >
        <p>Sorted by {sortCriteria}</p>
        {!dropDownOpen ? <IoMdArrowDropdown /> : <IoMdClose />}
      </div>
      <div
        className={`dropdown--menu ${dropDownOpen && "dropdown--menu__open"}`}
      >
        {keysArray.map((item) => (
          <div
            className="dropdown--menu__item"
            key={item}
            role="button"
            onClick={() => {
              onSort(item);
              setDropDownOpen(false);
            }}
          >
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sorter;
