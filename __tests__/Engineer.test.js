const Engineer = require('../lib/Engineer');

test('create an engineer object', () => {
  const engineer = new Engineer('Daniel Marin', 1, 'daniel@daniel.co', 'github');
  
  expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name.toString()));
  expect(engineer.getId()).toEqual(expect.stringContaining(engineer.Id.toString()));
  expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email.toString()));
  expect(engineer.getRole()).toBe('Engineer');
  expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});