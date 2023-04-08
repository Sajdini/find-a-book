import { keysArray } from "../../App";
interface P {
  sortedCategory: string;
}
const ListHead = ({ sortedCategory }: P) => {
  return (
    <div className=" list--item list--item__header">
      <div>
        <p>No#</p>
      </div>
      {keysArray.map((key) => (
        <div>
          <p
            className={
              sortedCategory === key ? "list--item__header--active" : ""
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
