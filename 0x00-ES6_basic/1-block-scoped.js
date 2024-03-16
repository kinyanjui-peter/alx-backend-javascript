export default function taskBlock(trueOrFalse) {
  if (trueOrFalse) {
    (() => { // Using arrow function syntax
      const task = true;
      const task2 = false;
    })();
  }

  return [false, true]; // Returning default values
}