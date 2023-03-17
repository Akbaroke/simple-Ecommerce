import Decrypt from '../utils/Decrypt'

export default function RestoreCart() {
  const getData = localStorage.getItem('cart')
  if (getData) {
    const result = Decrypt(getData)
    return result
  }
  return null
}
