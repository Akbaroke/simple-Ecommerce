import Encrypt from '../utils/Encrypt'

export default function SaveCart(data) {
  const result = Encrypt(data)
  localStorage.setItem('cart', result)
}
