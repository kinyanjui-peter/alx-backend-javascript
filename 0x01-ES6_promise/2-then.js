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
        reject(new Error());node 
      } finally {
        console.log('Got a response from the API');
      }
    }, 2000);
  });
  / Chain handlers after the function call
handleResponseFromAPI()
  .then((resolvedValue) => {
    // Handle the resolved value
    console.log('Resolved value:', resolvedValue);
    return resolvedValue; // Return the value to chain further
  })
  .catch((error) => {
    // Handle the rejection reason
    console.error('Error:', error.message);
    throw error; // Rethrow the error to propagate it further
  })
  .finally(() => {
    // Finally block, executes regardless of whether the promise is resolved or rejected
    console.log('Finally block executed');
  });

}
