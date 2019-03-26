import { isEmpty } from '../../utils/data';
import {
  getErrorEmptyObj, moreThen, moreThenTextError, requiredTextError,
} from '../../utils/validate';
import { YEAR_NOT_EARLIER_FIELD_TEXT } from '../../consts/errors';

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

/**
 * Common form validator
 * @param values
 */
export const validateFormBook = (values) => {
  const errors = {};
  const {
    title,
    year,
  } = values;
  const vTitle = validateTitle(title);
  const vYear = validateYear(year);

  if (vTitle.isError) {
    errors.title = vTitle.text;
  }

  if (vYear.isError) {
    errors.year = vYear.text;
  }

  return errors;
};

export default validateFormBook;
