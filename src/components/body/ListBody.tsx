
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
        <p dangerouslySetInnerHTML={{ __html: author }}></p>
      </div>
      <div>
        <p dangerouslySetInnerHTML={{ __html: title }}></p>
      </div>
      <div>
        <p dangerouslySetInnerHTML={{ __html: genre }}></p>
      </div>
    </div>
  );
};

export default Row;
