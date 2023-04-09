import { BookList } from "../../helpers";

interface P {
  number: number;
  book: BookList;
}
const Row = ({ number, book }: P) => {
  return (
    <div className="list--item list--item__body">
      <div className="list--item__column">
        <p>{number + 1}</p>
      </div>
      <div className="list--item__column">
        <p className="list--item__header--mobile">Author</p>
        <p dangerouslySetInnerHTML={{ __html: book.author }} />
      </div>
      <div className="list--item__column">
        <p className="list--item__header--mobile">Title</p>
        <p dangerouslySetInnerHTML={{ __html: book.title }} />
      </div>
      <div className="list--item__column">
        <p className="list--item__header--mobile">Genre</p>
        <p dangerouslySetInnerHTML={{ __html: book.genre }} />
      </div>
    </div>
  );
};

export default Row;
