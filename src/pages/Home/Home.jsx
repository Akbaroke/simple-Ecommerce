import React, { useEffect, useState } from 'react'
import CardProduct from '../../components/CardProduct/CardProduct'
import useSWR from 'swr'
import axios from '../../api'
import Decrypt from '../../utils/Decrypt'
import style from './style.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { IconPlus } from '@tabler/icons-react'
import {
  modalAdd,
  modalEdit,
} from '../../redux/actions/modal'
import SaveCart from '../../services/SaveCart'
import RestoreCart from '../../services/RestoreCart'

export default function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const cart = useSelector(state => state.cart)
  const modal = useSelector(state => state.modal)
  const dispatch = useDispatch()

  const fetcher = async () => {
    const { data } = await axios.get('/products')
    return data
  }

  const { data } = useSWR('/products', fetcher)
  useEffect(() => {
    if (data) {
      setProducts(Decrypt(data.data.products))
      setLoading(false)
    }
  }, [data])

  useEffect(() => {
    SaveCart(cart)
  }, [cart])

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <div className={style.body}>
        {products?.map((data, index) => {
          const result = cart.data.find(
            item => item.id === data.idProduct
          )
          return (
            <div
              key={index + 1}
              onClick={() => {
                dispatch(
                  modalEdit({
                    id: data.idProduct,
                    name: data.namaProduct,
                  })
                )
              }}>
              <CardProduct
                id={data.idProduct}
                name={data.namaProduct}
                price={data.harga}
                stock={data.stok}
                isCart={result}
                isSelect={modal.data.id === data.idProduct}
              />
            </div>
          )
        })}
      </div>
      <div
        className={style.btn}
        onClick={() => dispatch(modalAdd())}>
        <button>
          <IconPlus />
        </button>
      </div>
    </>
  )
}
