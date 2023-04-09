import "./List.css";
import { BookList } from "../../helpers";
import NoResults from "./NoResults";
import ListHead from "./ListHead";
import ListBody from "./ListBody";

interface P {
  list: BookList[];
  sortedCategory: keyof BookList;
}
const List = ({ list, sortedCategory }: P) => {
  return (
    <div className="list">
      <ListHead sortedCategory={sortedCategory} />

      {list.length > 0 ? (
        list.map((book, index) => (
          <ListBody key={index} book={book} number={index} />
        ))
      ) : (
        <NoResults />
      )}
    </div>
  );
};

export default List;
