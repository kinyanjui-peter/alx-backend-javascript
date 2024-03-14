interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
}

class TeacherImp implements Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;

  constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, yearsOfExperience: number | undefined, location: string, additionalAttributes: { [key: string]: any }) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.fullTimeEmployee = fullTimeEmployee;
      this.yearsOfExperience = yearsOfExperience;
      this.location = location;
      Object.assign(this, additionalAttributes);
  }
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const director: Directors = {
  firstName: 'peter',
  numberOfReports: 2,
  lastName: 'kinyanjui',
  fullTimeEmployee: true,
  location: 'Gilgil'
};
// print the first leter of the first name anf full last name
// example P. 
function printTeacher(firstName: string, lastName: string): string {
  const firstLetter: string = firstName[0].toUpperCase();
  return `${firstLetter}. ${lastName}`;
}
// Question4 :- student constructors.
interface StudentConstructor {
  firstName: string;
  lastName: string;
}
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}
class StudentClass implements StudentClass {
  private firstName: string;
  private lastName: string;

  constructor({firstName, lastName}: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework(): string {
    return 'Currently working';
}
displayName(): string {
  return this.firstName;
}
}
