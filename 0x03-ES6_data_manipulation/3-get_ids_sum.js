export default function getStudentIdsSum(getListStudents) {

  const total = getListStudents.reduce(gettotal, 0)
  console.log(`${total}`)

  function gettotal(previous, next) {
    return previous + next.id;
  }
}
