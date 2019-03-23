import { isEmpty } from '../../utils/data';

export const REQUIRED_FIELD_TEXT = 'поле обязательно для заполнения';

const getErrorEmptyObj = () => ({
  isError: false,
  text: '',
});

const validateTitle = (value) => {
  const error = getErrorEmptyObj();

  if (isEmpty(value)) {
    error.isError = true;
    error.text = REQUIRED_FIELD_TEXT;
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
