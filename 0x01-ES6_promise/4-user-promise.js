// function signUpUser(firstName, lastName) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const person = {
//         firstName,
//         lastName,
//       }
//       resolve(person);
//     }, 2000);
//   });
// };
import signUpUser from "./4-user-promise";

signUpUser("Bob", "Dylan")
  .then(user => console.log(user));
  