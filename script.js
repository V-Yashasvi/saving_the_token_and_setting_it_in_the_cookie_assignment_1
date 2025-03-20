const bycrpt=require('bcryptjs')
const jwt=require('jsonwebtoken')
require('dotenv').config()
const jwt_secret=process.env.JWT_SECRET

const encrypt = (payload) => {
  // encrypt the payload and return token
  return jwt.sign(payload, jwt_secret, {expiresIn: '1h'})
}

const decrypt = (token) => {
  // return decoded payload
  try {
    return jwt.verify(token, jwt_secret)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  encrypt,
  decrypt
}
