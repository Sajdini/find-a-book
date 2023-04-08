import { BookList } from "../../App";

interface P {
  number: number;
  author: string;
  title: string;
  genre: string;
}
const Row = ({ number, author, title, genre }: P) => {
  return (
    <div className="list--item list--item__body">
      <div>
        <p>{number + 1}</p>
      </div>
      <div>
        <p>{author}</p>
      </div>
      <div>
        <p>{title}</p>
      </div>
      <div>
        <p>{genre}</p>
      </div>
    </div>
  );
};

export default Row;
