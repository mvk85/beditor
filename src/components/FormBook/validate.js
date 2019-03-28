import { isEmpty } from '../../utils/data';
import {
  getErrorEmptyObj, moreThen, moreThenTextError, requiredTextError,
} from '../../utils/validate';
import { ISBN_NOT_CORRECT_FIELD_TEXT, YEAR_NOT_EARLIER_FIELD_TEXT } from '../../consts/errors';

const validateTitle = (value) => {
  const error = getErrorEmptyObj();

  if (isEmpty(value)) {
    error.isError = true;
    error.text = requiredTextError();

    return error;
  }

  if (moreThen(value, 30)) {
    error.isError = true;
    error.text = moreThenTextError(30);

    return error;
  }

  return error;
};

const validateYear = (value) => {
  const error = getErrorEmptyObj();

  if (Number(value) < 1800) {
    error.isError = true;
    error.text = YEAR_NOT_EARLIER_FIELD_TEXT;

    return error;
  }

  return error;
};

export function isValidISBN10(isbn) {
  let result = false;
  const regex = new RegExp(/^\d{9}(\d|X){1}$/);

  if (regex.test(isbn)) {
    let sum = 0;

    for (let i = 0; i < 9; i += 1) {
      sum += isbn[i] * (i + 1);
    }
    sum += isbn[9] === 'X' ? 10 * 10 : isbn[9] * 10;

    result = sum % 11 === 0;
  }

  return result;
}

function isOddNumber(value) {
  return value % 2 !== 0;
}

export function isValidISBN13(isbn) {
  let result = false;

  if (!Number.isNaN(isbn)) {
    let index = 0;
    let sum = 0;

    for (let i = 0; i < isbn.length; i += 1) {
      sum += isbn[i] * (isOddNumber(index) ? 3 : 1);
      index += 1;
    }

    result = sum % 10 === 0;
  }

  return result;
}

export function isValidISBN(isbn) {
  let result = false;

  if (isbn != null) {
    isbn = isbn.replace(/-/g, '');
    isbn = isbn.replace(/ /g, '');

    if (isbn.length === 10) {
      result = isValidISBN10(isbn);
    } else if (isbn.length === 13) {
      result = isValidISBN13(isbn);
    }
  }

  return result;
}

const validateISBN = (value) => {
  const error = getErrorEmptyObj();

  if (isEmpty(value)) {
    return error;
  }

  const isISBN = isValidISBN(value);

  if (!isISBN) {
    error.isError = true;
    error.text = ISBN_NOT_CORRECT_FIELD_TEXT;

    return error;
  }

  return error;
};

/**
 * Common form validator
 * @param values
 */
export const validateFormBook = (values) => {
  const errors = {};
  const {
    title,
    year,
    isbn,
  } = values;
  const vTitle = validateTitle(title);
  const vYear = validateYear(year);
  const vISBN = validateISBN(isbn);

  if (vTitle.isError) {
    errors.title = vTitle.text;
  }

  if (vYear.isError) {
    errors.year = vYear.text;
  }

  if (vISBN.isError) {
    errors.isbn = vISBN.text;
  }

  return errors;
};

export default validateFormBook;
