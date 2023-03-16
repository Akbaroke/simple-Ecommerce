import React from 'react'
import style from './style.module.scss'
import {
  IconPackage,
  IconShoppingCartPlus,
} from '@tabler/icons-react'
import DEFAULTIMGPRODUCT from '../../assets/default-img-product.svg'

export default function CardProduct({
  name,
  price,
  stock,
}) {
  return (
    <div className={style.card}>
      <img
        src={DEFAULTIMGPRODUCT}
        alt="Default Img Product"
      />
      <div className={style.body}>
        <h2>{name}</h2>
        <div className={style.stock}>
          <p>{price || 0}</p>
          <div>
            <IconPackage />
            <p>{stock || 0}</p>
          </div>
        </div>
      </div>
      <IconShoppingCartPlus />
    </div>
  )
}
