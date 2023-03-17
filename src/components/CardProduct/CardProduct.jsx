import React from 'react'
import style from './style.module.scss'
import {
  IconPackage,
  IconShoppingCartPlus,
} from '@tabler/icons-react'
import DEFAULTIMGPRODUCT from '../../assets/default-img-product.svg'
import RupiahFormat from '../../utils/RupiahFormat'
import { useDispatch } from 'react-redux'
import {
  addCart,
  incrementCart,
} from '../../redux/actions/cart'
import {
  alertClose,
  alertSuccess,
} from '../../redux/actions/alert'
import SaveCart from '../../services/SaveCart'

export default function CardProduct({
  id,
  name,
  price,
  stock,
  isCart,
  isSelect,
}) {
  const dispatch = useDispatch()
  const handleAddCart = (id, name, price, stock) => {
    if (stock > 0) {
      if (isCart) {
        dispatch(incrementCart(id, price))
        dispatch(
          alertSuccess('Successfully added to cart.')
        )
      } else {
        dispatch(addCart(name, price, id))
        dispatch(
          alertSuccess('Successfully added to cart.')
        )
      }
    }
  }

  return (
    <div
      className={isSelect ? style.cardSelect : style.card}>
      <img
        src={DEFAULTIMGPRODUCT}
        alt="Default Img Product"
      />
      <div className={style.body}>
        <h2>{name}</h2>
        <div className={style.stock}>
          <p>{RupiahFormat(price) || 0}</p>
          <div>
            <IconPackage />
            <p>{stock || 0}</p>
          </div>
        </div>
      </div>
      <IconShoppingCartPlus
        className={style.btnPlusCart}
        onClick={e => {
          e.stopPropagation()
          handleAddCart(id, name, price, stock)
        }}
      />
    </div>
  )
}
