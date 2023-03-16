import React, { useEffect, useState } from 'react'
import CardProduct from '../../components/CardProduct/CardProduct'
import useSWR, { useSWRConfig } from 'swr'
import axios from '../../api'
import Decrypt from '../../utils/Decrypt'
import style from './style.module.scss'
import { useSelector } from 'react-redux'
import { IconPlus, IconTrash } from '@tabler/icons-react'

export default function Home() {
  const { mutate } = useSWRConfig()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const cart = useSelector(state => state.cart)
  const [selectProduct, setSelectProduct] = useState('')

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
                setSelectProduct(data.idProduct)
              }}>
              <CardProduct
                id={data.idProduct}
                name={data.namaProduct}
                price={data.harga}
                stock={data.stok}
                isCart={result}
                isSelect={selectProduct === data.idProduct}
              />
            </div>
          )
        })}
      </div>
      <div className={style.btn}>
        <button>
          <IconPlus />
        </button>
      </div>
    </>
  )
}
