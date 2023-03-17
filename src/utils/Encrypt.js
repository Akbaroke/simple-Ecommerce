import crypto from 'crypto-js'

const Encrypt = data => {
  return crypto.AES.encrypt(
    JSON.stringify(data),
    import.meta.env.VITE_APP_SALT
  ).toString()
}

export default Encrypt
