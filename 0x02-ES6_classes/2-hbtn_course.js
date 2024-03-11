// Implement a class named HolbertonCourse

export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
        throw new Error('name must be a string')
      }
      if (typeof length !== 'number') {
        throw new Error('length must be a number')
      }
      if (!Array.isArray(students)) {
        throw new Error('students must be an Array')
      }

    this._name = name;
    this._length = length;
    this._students = students;
  }
  // get to get name
  get name() {
    return this._name;
  }

  // setter to update name
  set name(value) {
    this._name = value;
  }
 
  // get to get length
  get length() {
    return this._length;
  }
 
  // setter to update length
  set length(value) {
    this._length = value;
  }
 
  // get to get students
  get students() {
    return this._students;
  }
 
  // setter to update students
  set students(value) {
    this._students = value;
  }
}