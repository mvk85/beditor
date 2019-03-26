import { lessThen, moreThen } from '../../src/utils/validate';

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
});
