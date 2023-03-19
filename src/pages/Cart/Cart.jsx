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
  deleteCart,
  incrementCart,
} from '../../redux/actions/cart'
import {
  alertError,
  alertSuccess,
} from '../../redux/actions/alert'

export default function Cart() {
  const { data } = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const [deletes, setDeletes] = useState([])
  const [isAllChecked, setIsAllChecked] = useState(false)
  let dataId = []

  function handleAllCheck() {
    if (isAllChecked) {
      setDeletes([])
    } else {
      setDeletes(dataId)
    }
    setIsAllChecked(!isAllChecked)
  }

  useEffect(() => {
    if (deletes.length === dataId.length) {
      setIsAllChecked(true)
    }
    if (deletes.length === 0) {
      setIsAllChecked(false)
    }
  }, [isAllChecked, deletes])

  const handleDelete = () => {
    if (deletes.length > 0) {
      deletes.forEach(productId => {
        dispatch(deleteCart(productId))
      })
      dispatch(
        alertSuccess('Successfully deleted shopping cart.')
      )
      setIsAllChecked(false)
    } else {
      dataId.length === 0
        ? dispatch(alertError('The cart is still empty.'))
        : dispatch(
            alertError(
              'Select the product you want to remove from the cart.'
            )
          )
    }
    setDeletes([])
  }

  useEffect(() => {
    dataId = []
    data?.map(item => dataId.push(item.id))
  }, [data])

  return (
    <>
      <div className={style.head}>
        <span onClick={handleAllCheck}>
          <CheckBox check={isAllChecked}>
            <IconMinus />
          </CheckBox>
        </span>
        <IconTrash onClick={handleDelete} />
      </div>
      <div className={style.list}>
        {data?.map((item, index) => {
          dataId.push(item.id)
          return (
            <div key={index} className={style.cardCart}>
              <div>
                <div
                  onClick={() => {
                    setDeletes(prevDeletes => {
                      if (deletes.includes(item.id)) {
                        return prevDeletes.filter(
                          id => id !== item.id
                        )
                      }
                      return [...prevDeletes, item.id]
                    })
                  }}>
                  <CheckBox
                    check={
                      deletes.includes(item.id) ||
                      isAllChecked
                    }
                  />
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
          )
        })}
      </div>
      <div className={style.footer}>
        <span></span>
        <div className={style.summary}>
          {/* <h3>Summary Cart</h3> */}
        </div>
      </div>
    </>
  )
}
