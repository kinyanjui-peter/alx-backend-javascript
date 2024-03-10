//  return a promise with a boolean parameter

export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
     // const trueorfalse = true;
      if (success) {
        const respdata = {
          status: '200',
          body: 'Success'
        };
        resolve(respdata);
      } else {
        reject(new Error('The fake API is not working currently'));
      }
    }, 2000);
  });
}
