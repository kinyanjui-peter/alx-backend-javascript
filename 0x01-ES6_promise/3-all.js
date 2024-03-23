import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  return new Promise(async (_resolve, _reject) => {
    try {
      const [photoResponse, userResponse] = await Promise.all([uploadPhoto(), createUser()]);
      console.log(`${photoResponse} ${userResponse.body.firstName} ${userResponse.body.lastName}`);
    } catch (error) {
      console.error('Signup system offline');
    }
  }
  )
}
