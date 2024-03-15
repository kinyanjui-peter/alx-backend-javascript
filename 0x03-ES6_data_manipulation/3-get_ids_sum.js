export default function getStudentIdsSum(getListStudents) {
  const total = getListStudents.reduce(gettotal, 0);
  function gettotal(previous, next) {
    return previous + next.id;
  }
  console.log(`${total}`);
}
