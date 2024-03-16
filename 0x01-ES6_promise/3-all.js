import { uploadPhoto } from "/.utils"
import { createUser } from "./utils"

export default function handleProfileSignup() {
  return new Promise((resolve) => {
    setTimeout(() =>{
      uploadPhoto()
      resolve(createUser);
    }, 2000)
  } else {
    reject('Signup system offline');
  }
  )
}