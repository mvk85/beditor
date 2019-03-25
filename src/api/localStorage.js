import { BOOK_KEY, SORT_KEY } from '../consts/book';
import { getInitSort } from '../components/ListBooks/SortList/helper';

export function getBooks() {
  const books = localStorage.getItem(BOOK_KEY);

  if (!books) {
    localStorage.setItem(BOOK_KEY, JSON.stringify({}));

    return {};
  }

  return JSON.parse(books);
}

export function saveBook(bookObj = {}) {
  const books = getBooks();

  books[bookObj.id] = bookObj;

  localStorage.setItem(BOOK_KEY, JSON.stringify(books));
}

export function deleteBook(idBook) {
  const books = getBooks();

  delete books[idBook];

  localStorage.setItem(BOOK_KEY, JSON.stringify(books));
}

export function getSortBooks() {
  const sort = localStorage.getItem(SORT_KEY);

  if (!sort) {
    const sortInit = getInitSort();

    localStorage.setItem(SORT_KEY, JSON.stringify(sortInit));

    return sortInit;
  }

  return JSON.parse(sort);
}

export function setSortBooks(sort) {
  localStorage.setItem(SORT_KEY, JSON.stringify(sort));
}
