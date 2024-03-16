export default function createEmployeesObject(departmentName, employees) {
  // check that departmentName is a string
  if (typeof departmentName === String) {
    console.log('departmentName must be a string');
  }
  if (!Array.isArray(employees)) {
    consoele.log('employee must be an array')
  }
  const department = {
    [departmentName] : employees,
  };
  // check that employee is a array
  return department;
}
