import React, { useEffect, useState } from 'react'
import style from './style.module.scss'
import NumberOnly from '../../utils/NumberOnly'
import Button from '../Button/Button'
import { useDispatch } from 'react-redux'
import { useSWRConfig } from 'swr'
import {
  modalClose,
  modalDelete,
} from '../../redux/actions/modal'
import axios from '../../api'
import Decrypt from '../../utils/Decrypt'
import {
  alertError,
  alertSuccess,
} from '../../redux/actions/alert'
import { IconLoader2 } from '@tabler/icons-react'

export default function EditProduct({ data }) {
  const dispatch = useDispatch()
  const { mutate } = useSWRConfig()
  const [name, setName] = useState('...')
  const [price, setPrice] = useState('...')
  const [stock, setStock] = useState('...')
  const [isLoading, setIsLoading] = useState(false)

  const getData = async () => {
    try {
      const res = await axios.get(`/product/${data.id}`)
      const { namaProduct, harga, stok } = Decrypt(
        res.data.data.product
      )
      setName(namaProduct)
      setPrice(harga)
      setStock(stok)
    } catch (error) {
      dispatch(modalClose())
      dispatch(
        alertError(
          `Error, ${error.response.data.error.message}`
        )
      )
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const handelUpdateProduct = async () => {
    setIsLoading(true)
    try {
      await axios.put(`/product/${data.id}`, {
        namaProduct: name,
        harga: parseInt(price),
        stok: parseInt(stock),
      })

      dispatch(modalClose())
      dispatch(alertSuccess('Product update successfully.'))
      mutate('/products')
    } catch (error) {
      dispatch(
        alertError(
          `Error, ${error.response.data.error.message}`
        )
      )
    }
    setIsLoading(false)
  }

  return (
    <div className={style.card}>
      <h1>Edit Product</h1>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="name product (max.10 char)"
            maxLength={10}
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            placeholder="10000"
            maxLength={9}
            onKeyDown={e => NumberOnly(e)}
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="stock">Stock</label>
          <input
            type="text"
            name="stock"
            placeholder="1"
            maxLength={5}
            onKeyDown={e => NumberOnly(e)}
            value={stock}
            onChange={e => setStock(e.target.value)}
          />
        </div>
        <h3
          className={style.linkDelete}
          onClick={() => dispatch(modalDelete(data))}>
          Delete this product ?
        </h3>
      </form>
      <div className={style.btn}>
        <Button onClick={() => dispatch(modalClose())}>
          cancel
        </Button>
        <Button
          solid="true"
          onClick={isLoading ? null : handelUpdateProduct}>
          {isLoading ? <IconLoader2 /> : 'save'}
        </Button>
      </div>
    </div>
  )
}
