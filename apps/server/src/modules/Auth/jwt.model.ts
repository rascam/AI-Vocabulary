import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
const JWT_SECRET = process.env.JWT_SECRET

export function createJWT(userId: string) {
  if (!JWT_SECRET) {
    throw new Error('The JWT_SECRET env variable was not found!')
  }
  return jwt.sign({ userId }, JWT_SECRET)
}

export function verifyJWT(token: string) {
  if (!JWT_SECRET) {
    throw new Error('The JWT_SECRET env variable was not found!')
  }
  return jwt.verify(token, JWT_SECRET)
}