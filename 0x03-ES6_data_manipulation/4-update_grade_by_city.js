export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  if (!Array.isArray(newGrades)) {
    console.log('new grades must be an array')
    return;
  }
  if (typeof city !== 'string') {
      console.log('city must be a string')
      return;
  }

  // filter and return student in a given city.
  const filteredcity = getListStudents().filter(student => student.location === city);
  const updatedstudent = filteredcity.map(student => ({...student, grade:newGrades}));

  updatedstudent.forEach(student => {
    if (updatedstudent.grade === null) {
      student.grade = ('N/A')
  0      }})
  return updatedstudent;
}
