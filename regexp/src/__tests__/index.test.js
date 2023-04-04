import Validator from "..";

test('successful validation', () =>{
  const user = new Validator('a1-_aew222s33r');
  expect(user.validateUsername()).toBe(true);
});
