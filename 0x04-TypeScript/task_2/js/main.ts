//Adavenced types Part to implement DirectorInterface
interface DirectorInterface {
  workFromHome(): string
  getCoffeeBreak?(): string
  workDirectorTasks(): string
};
// TeacherInterface
interface TeacherInterface {
  workFromHome(): string
  getCoffeeBreak(): string
  workTeacherTasks(): string
  };

//Director class to implement DirectorInterface
class Director implements DirectorInterface {
  workFromHome = () => 'Working from home'
  getToWork = () => 'Getting a coffee break'
  workDirectorTasks = () => 'Getting to director tasks'
};

// Teacher class to implement TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome = () => 'Cannot work from home'
  getCoffeeBreak = () => 'Cannot have a break'
  workTeacherTasks = () => 'Getting to work'
};

// function to create employees
function createEmployee(salary: number | string) {
  if (typeof salary === 'number'  && salary < 500) {
    return 'Teacher';
  } else if (typeof salary === 'string' && salary === '$500') {
    return 'Director';
  } else {
    return 'Director';
  }
}

function isDirector(employee: any): employee is Director {
  return employee instanceof Director;
}

// Define executeWork function
function executeWork(employee: Director | Teacher) {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}
// string literal
let Subjects: 'Math' | 'History';

//function
function teachClass(todayClass:  'Math' | 'History'): string { 
  if (todayClass === 'Math' || todayClass === 'History') {
    return `Teaching ${todayClass}`;
  }

}