import React, { useState } from 'react'
import style from './style.module.scss'
import NumberOnly from '../../utils/NumberOnly'
import Button from '../Button/Button'
import { useDispatch } from 'react-redux'
import { modalClose } from '../../redux/actions/modal'
import axios from '../../api'
import {
  alertError,
  alertSuccess,
} from '../../redux/actions/alert'
import { useSWRConfig } from 'swr'
import { IconLoader2 } from '@tabler/icons-react'

export default function AddProduct() {
  const dispatch = useDispatch()
  const { mutate } = useSWRConfig()
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleAddProduct = async () => {
    setIsLoading(true)
    try {
      await axios.post('/product', {
        namaProduct: name,
        harga: parseInt(price),
        stok: parseInt(stock),
      })

      dispatch(modalClose())
      dispatch(alertSuccess('Product added successfully.'))
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
      <h1>Add Product</h1>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="name product (max.10 char)"
            maxLength={10}
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
            onChange={e => setStock(e.target.value)}
          />
        </div>
      </form>
      <div className={style.btn}>
        <Button onClick={() => dispatch(modalClose())}>
          cancel
        </Button>
        <Button
          solid="true"
          onClick={isLoading ? null : handleAddProduct}>
          {isLoading ? <IconLoader2 /> : 'save'}
        </Button>
      </div>
    </div>
  )
}
