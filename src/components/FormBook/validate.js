import { isEmpty } from '../../utils/data';
import {
  getErrorEmptyObj, moreThen, moreThenTextError, requiredTextError,
} from '../../utils/validate';

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

/**
 * Common form validator
 * @param values
 */
export const validateFormBook = (values) => {
  const errors = {};
  const {
    title,
  } = values;
  const vTitle = validateTitle(title);

  if (vTitle.isError) {
    errors.title = vTitle.text;
  }

  return errors;
};


export default validateFormBook;
