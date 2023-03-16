import { IconShoppingCart } from '@tabler/icons-react'
import React from 'react'
import style from './style.module.scss'
import LOGO from '../../assets/logo.png'
import { useSelector } from 'react-redux'

export default function Topbar() {
  const { count } = useSelector(state => state.cart)
  return (
    <div className={style.topbar}>
      <img src={LOGO} alt="logo" className={style.logo} />
      <div className={style.cart}>
        <IconShoppingCart />
        {count > 0 && <span>{count}</span>}
      </div>
    </div>
  )
}
