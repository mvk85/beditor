import { lessThen, moreThen } from '../../src/utils/validate';
import { isValidISBN, isValidISBN10, isValidISBN13 } from '../../src/components/FormBook/validate';

describe('test validate utils', () => {
  describe('moreThen', () => {
    const valueNumber = 100;
    const valueString = 'string';

    test('number more then return true', () => {
      expect(moreThen(valueNumber, 99)).toBeTruthy();
    });
    test('number more then return false', () => {
      expect(moreThen(valueNumber, 101)).not.toBeTruthy();
    });
    test('string more then return true', () => {
      expect(moreThen(valueString, 5)).toBeTruthy();
    });
    test('string more then return false', () => {
      expect(moreThen(valueString, 7)).not.toBeTruthy();
    });
    test('not correct return false', () => {
      expect(moreThen({}, 7)).not.toBeTruthy();
    });
  });

  describe('lessThen', () => {
    const valueNumber = 100;
    const valueString = 'string';

    test('number more then return true', () => {
      expect(lessThen(valueNumber, 101)).toBeTruthy();
    });
    test('number more then return false', () => {
      expect(lessThen(valueNumber, 99)).not.toBeTruthy();
    });
    test('string more then return true', () => {
      expect(lessThen(valueString, 7)).toBeTruthy();
    });
    test('string more then return false', () => {
      expect(lessThen(valueString, 5)).not.toBeTruthy();
    });
    test('not correct return false', () => {
      expect(lessThen({}, 7)).not.toBeTruthy();
    });
  });

  describe('isValidISBN10', () => {
    test('isbn correct', () => {
      const correctISBN = [
        '048665088X',
        '0306406152',
        '0811821846',
        '0306406152',
      ];

      correctISBN.forEach((isbn) => {
        expect(isValidISBN10(isbn)).toBeTruthy();
      });
    });

    test('isbn not correct', () => {
      const notCorrectISBN = [
        '048665088A',
        '03064061521',
        '030640615',
      ];

      notCorrectISBN.forEach((isbn) => {
        expect(isValidISBN10(isbn)).toBeFalsy();
      });
    });
  });

  describe('isValidISBN13', () => {
    test('isbn correct', () => {
      const correctISBN = [
        '9780811821841',
        '9780306406157',
      ];

      correctISBN.forEach((isbn) => {
        expect(isValidISBN13(isbn)).toBeTruthy();
      });
    });

    test('isbn not correct', () => {
      const notCorrectISBN = [
        '9770811821841',
        '977081182184A',
      ];

      notCorrectISBN.forEach((isbn) => {
        expect(isValidISBN13(isbn)).toBeFalsy();
      });
    });
  });

  describe('isValidISBN', () => {
    test('isbn correct', () => {
      const correctISBN = [
        '048665088X',
        '0306406152',
        '0811821846',
        '0306406152',
        '9780811821841',
        '9780306406157',
      ];

      correctISBN.forEach((isbn) => {
        expect(isValidISBN(isbn)).toBeTruthy();
      });
    });

    test('isbn not correct', () => {
      const notCorrectISBN = [
        '048665088A',
        '03064061521',
        '030640615',
        '9770811821841',
        '977081182184A',
      ];

      notCorrectISBN.forEach((isbn) => {
        expect(isValidISBN(isbn)).toBeFalsy();
      });
    });
  });
});
