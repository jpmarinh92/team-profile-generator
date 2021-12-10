const Intern = require('../lib/Intern');

test('create an intern object', () => {
  const intern = new Intern('Esteban Marin', 1, 'esteban@esteban.co', 'EIA');
  
  expect(intern.getName()).toEqual(expect.stringContaining(intern.name.toString()));
  expect(intern.getId()).toEqual(expect.stringContaining(intern.Id.toString()));
  expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email.toString()));
  expect(intern.getRole()).toBe('Intern');
  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
})