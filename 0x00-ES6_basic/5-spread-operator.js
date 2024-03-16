export default function concatArrays(array1, array2, string) {
  const stringarr = [...string];
  return [...array1, ...array2, ...stringarr];
}
