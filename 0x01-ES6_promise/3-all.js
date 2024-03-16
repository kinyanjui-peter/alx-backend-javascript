import { uploadPhoto } from "/.utils"
import { createUser } from "./utils"

// export default function handleProfileSignup() {
//   return new Promise((resolve, reject) => {
//     try {
//       setTimeout(() =>{
//         const photo = {
//           body: uploadPhoto(),
//           firstName: 'Peter',
//           lastName: 'Kinyanjui',
//         }
//         resolve(photo);
//         } else {
//         reject('Signup system offline');
//     }, 2000)
//   } 
//   )
// }
async function handleProfileSignup() {
  try {
      const photoResponse = await uploadPhoto();
      const userResponse = await createUser();
      
      console.log(`${photoResponse.body.firstName} ${userResponse.body.lastName}`);
  } catch (error) {
      console.error("Signup system offline");
  }
}

export default handleProfileSignup;
