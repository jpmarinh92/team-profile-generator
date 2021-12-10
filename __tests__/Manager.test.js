const Manager = require('../lib/Manager');

test('create a manager object', () => {
  const manager = new Manager('Juan Pablo', 3, 'jpmarin@jpmarin.co', 123);
  
  expect(manager.getName()).toEqual(expect.stringContaining(manager.name.toString()));
  expect(manager.getId()).toEqual(expect.stringContaining(manager.Id.toString()));
  expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email.toString()));
  expect(manager.getRole()).toBe('Manager');
  expect(manager.officeNumber).toBe(123);
});