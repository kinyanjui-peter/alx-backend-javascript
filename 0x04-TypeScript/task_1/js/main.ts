export interface Teacher {
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

const teacher = new TeacherImp('Peter', 'Kinyanjui', true, 25, 'Gilgil', { contract: true });

console.log(teacher);