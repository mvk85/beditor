export const BOOK_KEY = 'books';

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
