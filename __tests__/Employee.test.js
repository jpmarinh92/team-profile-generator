const Employee = require('../lib/Employee');

test('create an employee object', () => {
  const employee = new Employee('Ana Maria',1, 'anamh89@hotmail.com');
  
  expect(employee.getName()).toBe("Ana Maria");
  expect(employee.getId()).toBe("1");
  expect(employee.getEmail()).toBe('anamh89@hotmail.com');
  expect(employee.getRole()).toBe('Employee');
});
