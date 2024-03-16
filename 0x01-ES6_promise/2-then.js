export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (!promise) {
          throw new Error('');
        }
        const resolvedpromise = {
          status: '200',
          body: 'success',
        };
        resolve(resolvedpromise);
      } catch (error) {
        reject(new Error());
      } finally {
        console.log('Got a response from the API');
      }
    }, 2000);
  });
}
