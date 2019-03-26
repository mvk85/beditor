import { MORE_THEN_FIELD_TEXT, REQUIRED_FIELD_TEXT } from '../consts/errors';

export const moreThen = (value, number) => {
  if (typeof value === 'number') {
    return value > number;
  }

  if (typeof value === 'string') {
    return value.length > number;
  }

  return false;
};

export const lessThen = (value, number) => {
  if (typeof value === 'number') {
    return value < number;
  }

  if (typeof value === 'string') {
    return value.length < number;
  }

  return false;
};

export const getErrorEmptyObj = () => ({
  isError: false,
  text: '',
});

export const moreThenTextError = value => `${MORE_THEN_FIELD_TEXT} ${value}`;
export const requiredTextError = () => REQUIRED_FIELD_TEXT;
