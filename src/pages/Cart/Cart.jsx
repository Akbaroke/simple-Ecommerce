import React, { useEffect, useState } from 'react'
import style from './style.module.scss'
import {
  IconMinus,
  IconPlus,
  IconTrash,
} from '@tabler/icons-react'
import { useDispatch, useSelector } from 'react-redux'
import DEFAULTIMGPRODUCT from '../../assets/default-img-product.svg'
import CheckBox from '../../components/CheckBox/CheckBox'
import RupiahFormat from '../../utils/RupiahFormat'
import {
  decrementCart,
  incrementCart,
} from '../../redux/actions/cart'

export default function Cart() {
  const { data } = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const deletes = []

  return (
    <>
      <div className={style.head}>
        <span>
          <CheckBox>
            <IconMinus />
          </CheckBox>
        </span>
        <IconTrash />
      </div>
      <div className={style.list}>
        {data?.map((item, index) => (
          <div key={index} className={style.cardCart}>
            <div>
              <div
                onClick={() => {
                  deletes.push(item.id)
                  console.log(deletes)
                }}>
                <CheckBox check={false} />
              </div>
              <img
                src={DEFAULTIMGPRODUCT}
                alt="Default Img Product"
              />
              <div className={style.info}>
                <h1>{item.name}</h1>
                <h2>{RupiahFormat(item.price)}/pcs</h2>
                <h3>
                  {RupiahFormat(item.price * item.count)}
                </h3>
              </div>
            </div>
            <div className={style.counter}>
              <IconMinus
                onClick={() => {
                  item.count > 1
                    ? dispatch(
                        decrementCart(item.id, item.price)
                      )
                    : null
                }}
              />
              <p>{item.count}</p>
              <IconPlus
                onClick={() =>
                  dispatch(
                    incrementCart(item.id, item.price)
                  )
                }
              />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
