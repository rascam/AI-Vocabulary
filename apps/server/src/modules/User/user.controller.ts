import { compareHash, hashingPassword } from "../../modules/Encryption/encryption.model"
import { getUserByEmail, createUser } from "../../modules/User/user.model"

async function register(email: string, password: string) {
  const user = await getUserByEmail(email)

  if (user) {
      throw new Error("User already exists")
  }

  const hashedPassword = await hashingPassword(password)
  const createdUser = await createUser({ email, hashedPassword})
 
}
async function login(email: string, password: string) {

  const user = await getUserByEmail(email)

  if (!user) {
      //user not found
      throw new Error("User not found")
  }

  const match = await compareHash(password, user.hashedPassword);

  if(match) {
      //login
  }

}