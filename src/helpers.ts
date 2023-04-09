import listofbooks from "./assets/listofbooks.json";

export interface BookList {
  author: string;
  title: string;
  genre: string;
}

export const sortObjectsByKey = (objects: BookList[], key: keyof BookList) => {
  return objects.sort((a, b) =>
    a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0
  );
};

export const keysArray: Array<keyof BookList> = Object.keys(
  listofbooks[0]
) as Array<keyof BookList>;
