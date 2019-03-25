import { BOOK_TITLE_FIELD, BOOK_YEAR_FIELD } from '../../../consts/book';

export const getInitSort = () => ({
  [BOOK_TITLE_FIELD]: {
    active: true,
    isDown: true,
    isUp: false,
    key: BOOK_TITLE_FIELD,
  },
  [BOOK_YEAR_FIELD]: {
    active: false,
    isDown: true,
    isUp: false,
    key: BOOK_YEAR_FIELD,
  },
});
