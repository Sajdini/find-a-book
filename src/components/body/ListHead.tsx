import { BookList, keysArray } from "../../helpers";
interface P {
  sortedCategory: keyof BookList;
}
const ListHead = ({ sortedCategory }: P) => {
  return (
    <div className=" list--item list--item__header">
      <div className="list--item__column">
        <p>No#</p>
      </div>
      {keysArray.map((key) => (
        <div className="list--item__column">
          <p
            className={
              sortedCategory === key ? "list--item__column--active" : ""
            }
          >
            {key}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ListHead;
