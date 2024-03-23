export default async function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const person = {
        firstName,
        lastName,
      }
      resolve(person);
    }, 2000);
  });
};
