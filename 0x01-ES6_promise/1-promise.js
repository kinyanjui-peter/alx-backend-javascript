//  return a promise with a boolean parameter

export default async function getFullResponseFromAPI(success) {
  console.log('Inside getFullResponseFromAPI function');
  return new Promise((resolve, reject) => {
    console.log('Inside setTimeout');
    setTimeout(() => {
      // const trueorfalse = true;
      if (success) {
        const respdata = {
          status: '200',
          body: 'Success',
        };
        resolve(respdata);
      } else {
        reject(new Error('The fake API is not working currently'));
      }
    }, 2000);
  });
}
