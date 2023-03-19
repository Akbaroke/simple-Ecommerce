import { IconShoppingCart } from '@tabler/icons-react'
import React from 'react'
import style from './style.module.scss'
import LOGO from '../../assets/logo.png'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Topbar() {
  const { count } = useSelector(state => state.cart)
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <div className={style.topbar}>
      <img
        src={LOGO}
        alt="logo"
        className={style.logo}
        onClick={() => navigate('/')}
      />
      <div
        onClick={() => navigate('/cart')}
        className={
          location.pathname === '/cart'
            ? style.cartFocus
            : style.cart
        }>
        <IconShoppingCart />
        {count > 0 && <span>{count}</span>}
      </div>
    </div>
  )
}
