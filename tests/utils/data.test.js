import { isEmpty, sortByKeyBook } from '../../src/utils/data';

describe('test data utils', () => {
  describe('isEmpty test', () => {
    const valueUndefined = undefined;
    const valueNull = null;
    const valueArrayEmpty = [];
    const valueObjectEmpty = {};
    const valueNotEmptyArray = [1, 2, 3];
    const valueNotEmptyObject = { 1: 1, 2: 2 };

    test('undefined is empty', () => {
      expect(isEmpty(valueUndefined)).toBeTruthy();
    });
    test('null is empty', () => {
      expect(isEmpty(valueNull)).toBeTruthy();
    });
    test('array empty', () => {
      expect(isEmpty(valueArrayEmpty)).toBeTruthy();
    });
    test('object empty', () => {
      expect(isEmpty(valueObjectEmpty)).toBeTruthy();
    });
    test('array not empty', () => {
      expect(isEmpty(valueNotEmptyArray)).not.toBeTruthy();
    });
    test('object not empty', () => {
      expect(isEmpty(valueNotEmptyObject)).not.toBeTruthy();
    });
  });

  describe('sortByKeyBook sort list books', () => {
    const dataRaw = [
      { data: { title: 'title1' } },
      { data: { title: 'title3' } },
    ];
    const dataSortAsc = [
      { data: { title: 'title1' } },
      { data: { title: 'title3' } },
    ];
    const dataSortDesc = [
      { data: { title: 'title3' } },
      { data: { title: 'title1' } },
    ];
    const ASC = true;
    const DESC = false;

    test('asc sort by title', () => {
      expect(dataRaw.sort(sortByKeyBook('title', ASC))).toEqual(dataSortAsc);
    });
    test('desc sort by title', () => {
      expect(dataRaw.sort(sortByKeyBook('title', DESC))).toEqual(dataSortDesc);
    });
  });
});
