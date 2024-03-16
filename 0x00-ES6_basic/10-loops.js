export default function appendToEachArrayValue(array, appendString) {
  const newString = [];
  for (const idx of array) {
    newString.push(appendString + idx);
  }
  return newString;
}
