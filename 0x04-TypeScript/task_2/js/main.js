;
;
//Director class to implement DirectorInterface
var Director = /** @class */ (function () {
    function Director() {
        this.workFromHome = function () { return 'Working from home'; };
        this.getToWork = function () { return 'Getting a coffee break'; };
        this.workDirectorTasks = function () { return 'Getting to director tasks'; };
    }
    return Director;
}());
;
// Teacher class to implement TeacherInterface
var Teacher = /** @class */ (function () {
    function Teacher() {
        this.workFromHome = function () { return 'Cannot work from home'; };
        this.getCoffeeBreak = function () { return 'Cannot have a break'; };
        this.workTeacherTasks = function () { return 'Getting to work'; };
    }
    return Teacher;
}());
;
// function to create employees
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return 'Teacher';
    }
    else if (typeof salary === 'string' && salary === '$500') {
        return 'Director';
    }
    else {
        return 'Director';
    }
}
var mrPeter = createEmployee(200);
console.log(mrPeter);
var mK = createEmployee(1000);
console.log(mrPeter);
var madl = createEmployee('$500');
console.log(mrPeter);
