import { useMemo, useState } from "react";
import Header from "./components/header";
import { useDebounce } from "use-debounce";
import listofbooks from "./assets/listofbooks.json";
import "./App.css";
import List from "./components/body";

export interface BookList {
  author: string;
  title: string;
  genre: string;
}

const sortObjectsByKey = (objects: BookList[], key: keyof BookList) => {
  return objects.sort((a, b) =>
    a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0
  );
};

export const keysArray: Array<keyof BookList> = Object.keys(
  listofbooks[0]
) as Array<keyof BookList>;

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [sortCriteria, setSortCriteria] = useState<keyof BookList>("author");
  const debouncedSearchValue = useDebounce(searchValue, 500);

  const onSearch = useMemo(() => {
    if (!debouncedSearchValue[0]) return listofbooks;
    const regex = new RegExp(searchValue, "gi");
    return listofbooks
      .map((book) => {
        const title = book.title.replace(
          regex,
          (match) => `<span class="highlight">${match}</span>`
        );
        const author = book.author.replace(
          regex,
          (match) => `<span class="highlight">${match}</span>`
        );
        const genre = book.genre.replace(
          regex,
          (match) => `<span class="highlight">${match}</span>`
        );
        return { ...book, title, author, genre };
      })
      .filter((book) =>
        Object.values(book)
          .join(" ")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );
  }, [listofbooks, debouncedSearchValue]);

  return (
    <div className="app_container">
      <Header
        onSearch={setSearchValue}
        searchValue={searchValue}
        onSort={setSortCriteria}
        sortCriteria={sortCriteria}
      />
      <List
        list={
          !debouncedSearchValue[0]
            ? sortObjectsByKey(listofbooks, sortCriteria)
            : onSearch
        }
        sortedCategory={sortCriteria}
      />
    </div>
  );
}

export default App;
