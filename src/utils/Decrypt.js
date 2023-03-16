import crypto from 'crypto-js'

const Decrypt = data => {
  return JSON.parse(
    crypto.AES.decrypt(
      data,
      import.meta.env.VITE_APP_SALT
    ).toString(crypto.enc.Utf8)
  )
}

export default Decrypt
