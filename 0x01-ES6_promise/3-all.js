import { uploadPhoto, createUser } from './utils';

async function handleProfileSignup() {
  try {
      const [photoResponse, userResponse] = await Promise.all([uploadPhoto(), createUser()]);
      console.log(`${photoResponse} ${userResponse.body.firstName} ${userResponse.body.lastName}`);
  } catch (error) {
      console.error('Signup system offline');
  }
}

export default handleProfileSignup;
