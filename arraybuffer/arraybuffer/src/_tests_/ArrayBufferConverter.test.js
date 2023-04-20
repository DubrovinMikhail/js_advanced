import getBuffer from '../getBuffer';
import ArrayBufferConverter from '../ArrayBufferConverter';

test('load data instanceof ArrayBuffer', () => {
  const convertData = new ArrayBufferConverter();
  convertData.load(getBuffer());
  expect(convertData.buffer).toEqual(getBuffer());
});

test('load data not defined', () => {
  const convertData = new ArrayBufferConverter();
  convertData.load();
  expect(convertData.buffer).not.toBeDefined();
});

test('test tostring', () => {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const convertData = new ArrayBufferConverter();
  convertData.load(getBuffer());
  expect(convertData.toString()).toBe(data);
});
