import {
  isEmptyObject,
  isNotEmptyObject,
  isEmptyArray,
  isNotEmptyArray
} from './isEmptyUtil';

describe('isEmpty', () => {
  describe('isEmptyObject', () => {
    it('should return true if object is empty', () => {
      const testObject = {};
      expect(isEmptyObject(testObject)).toEqual(true);
    })
    it('should return false if object is not empty', () => {
      const testObject = { user: 'Getting tested' };
      expect(isEmptyObject(testObject)).toEqual(false);
    })
    it('should return undefined if what is passed to the util is a non-empty array of objects', () => {
      const testObject = [{keya: 'lol', keyb: 'foo'}, {keya: 'yup', keyb: 'nay'}];
      expect(isEmptyObject(testObject)).toEqual(undefined);
    })
    it('should return undefined if what is passed to the util is null', () => {
      const testObject = null;
      expect(isEmptyObject(testObject)).toEqual(undefined);
    })
    it('should return undefined if what is passed to the util is a string', () => {
      const testObject = 'lol';
      expect(isEmptyObject(testObject)).toEqual(undefined);
    })
  })
  describe('isNotEmptyObject', () => {
    it('should return true if object is not empty', () => {
      const testObject = { user: 'Getting tested' };
      expect(isNotEmptyObject(testObject)).toEqual(true);
    })
    it('should return false if object is empty', () => {
      const testObject = {};
      expect(isNotEmptyObject(testObject)).toEqual(false);
    })
    it('should return undefined if what is passed to the util is a non-empty array of objects', () => {
      const testObject = [{keya: 'lol', keyb: 'foo'}, {keya: 'yup', keyb: 'nay'}];
      expect(isNotEmptyObject(testObject)).toEqual(undefined);
    })
    it('should return undefined if what is passed to the util is null', () => {
      const testObject = null;
      expect(isNotEmptyObject(testObject)).toEqual(undefined);
    })
    it('should return undefined if what is passed to the util is a string', () => {
      const testObject = 'lol';
      expect(isNotEmptyObject(testObject)).toEqual(undefined);
    })
  })
  describe('isEmptyArray', () => {
    it('should return true if array is empty', () => {
      const testArray = [];
      expect(isEmptyArray(testArray)).toEqual(true);
    })
    it('should return false if array is not empty', () => {
      const testArray = ['this', 'is', 'not', 'empty'];
      expect(isEmptyArray(testArray)).toEqual(false);
    })
    it('should return false if what is passed to the util is a non-empty array of objects', () => {
      const testArray = [{keya: 'lol', keyb: 'foo'}, {keya: 'yup', keyb: 'nay'}];
      expect(isEmptyArray(testArray)).toEqual(false);
    })
    it('should return undefined if what is passed to the util is an empty object', () => {
      const testArray = {};
      expect(isEmptyArray(testArray)).toEqual(undefined);
    })
    it('should return undefined if what is passed to the util is null', () => {
      const testArray = null;
      expect(isEmptyArray(testArray)).toEqual(undefined);
    })
    it('should return undefined if what is passed to the util is a string', () => {
      const testArray = 'lol';
      expect(isEmptyArray(testArray)).toEqual(undefined);
    })
  })
  describe('isNotEmptyArray', () => {
    it('should return true if array is not empty', () => {
      const testArray = ['this', 'is', 'not', 'empty'];
      expect(isNotEmptyArray(testArray)).toEqual(true);
    })
    it('should return false if array is empty', () => {
      const testArray = [];
      expect(isNotEmptyArray(testArray)).toEqual(false);
    })
    it('should return false if what is passed to the util is a non-empty array of objects', () => {
      const testArray = [{keya: 'lol', keyb: 'foo'}, {keya: 'yup', keyb: 'nay'}];
      expect(isNotEmptyArray(testArray)).toEqual(true);
    })
    it('should return undefined if what is passed to the util is an empty object', () => {
      const testArray = {};
      expect(isNotEmptyArray(testArray)).toEqual(undefined);
    })
    it('should return undefined if what is passed to the util is null', () => {
      const testArray = null;
      expect(isNotEmptyArray(testArray)).toEqual(undefined);
    })
    it('should return undefined if what is passed to the util is a string', () => {
      const testArray = 'lol';
      expect(isNotEmptyArray(testArray)).toEqual(undefined);
    })
  })
});
