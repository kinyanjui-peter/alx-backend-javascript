export default function getStudentsByLocation(getListStudents, city) {
  return getListStudents.filter(function(value) {
    return value.location === city;
  });
}