import { IconShoppingCart } from '@tabler/icons-react'
import React, { useState } from 'react'
import style from './style.module.scss'
import LOGO from '../../assets/logo.png'

export default function Topbar({ children }) {
  const [cartCount, setCartCount] = useState(1)
  return (
    <>
      <div className={style.topbar}>
        <img src={LOGO} alt="logo" className={style.logo} />
        <div className={style.cart}>
          <IconShoppingCart />
          {cartCount > 0 && <span>{cartCount}</span>}
        </div>
      </div>
      <div>{children}</div>
    </>
  )
}
