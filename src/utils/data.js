/* eslint-disable import/prefer-default-export */
/**
 * Data check for empty
 * @param value
 * @returns {boolean}
 */
export function isEmpty(value) {
  return value === undefined
    || value === null
    || (typeof value === 'object' && Object.keys(value).length === 0)
    || (typeof value === 'string' && value.trim().length === 0);
}
