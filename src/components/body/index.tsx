import "./List.css";
import { BookList, keysArray } from "../../App";
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

      {list.length === 0 ? (
        <NoResults />
      ) : (
        list.map(({ author, title, genre }, index) => (
          <ListBody
            author={author}
            title={title}
            genre={genre}
            number={index}
          />
        ))
      )}
    </div>
  );
};

export default List;
