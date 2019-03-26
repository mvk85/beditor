import { BOOK_TITLE_FIELD, BOOK_YEAR_FIELD } from '../../../consts/book';

export const getItemSort = () => ({
  active: true,
  isDown: true,
  isUp: false,
});

export const setActiveItemSort = sort => ({
  ...sort,
  active: true,
});

export const setDeactivateItemSort = sort => ({
  ...sort,
  active: false,
});

export const setRevertDownUpSort = sort => ({
  ...sort,
  isDown: !sort.isDown,
  isUp: !sort.isUp,
});

export const getInitSort = () => ({
  [BOOK_TITLE_FIELD]: getItemSort(),
  [BOOK_YEAR_FIELD]: setDeactivateItemSort(getItemSort()),
});
