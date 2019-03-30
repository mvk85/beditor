import moment from 'moment';
import { DATE_PICKER_BOOK_FORMAT, DATE_PICKER_FORMAT } from '../consts/date';

export const getFormatDateForBook = date => (
  moment(date, DATE_PICKER_FORMAT).format(DATE_PICKER_BOOK_FORMAT)
);
