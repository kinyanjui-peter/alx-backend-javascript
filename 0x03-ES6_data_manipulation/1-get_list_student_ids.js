export default function getListStudentIds(arrays) {
if (!Array.isArray(arrays)){
  return [];
}
return arrays.map(obj => obj.id);        
}
