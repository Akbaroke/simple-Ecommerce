import React, { useState } from 'react'
import style from './style.module.scss'
import Button from '../Button/Button'
import { IconLoader2, IconTrash } from '@tabler/icons-react'
import { useDispatch } from 'react-redux'
import { useSWRConfig } from 'swr'
import {
  modalClose,
  modalEdit,
} from '../../redux/actions/modal'
import axios from '../../api'
import {
  alertError,
  alertSuccess,
} from '../../redux/actions/alert'

export default function ConfirmDelete({ data }) {
  const dispatch = useDispatch()
  const { mutate } = useSWRConfig()
  const [isLoading, setIsLoading] = useState(false)

  const handleDeleteProduct = async () => {
    setIsLoading(true)
    try {
      await axios.delete(`/product/${data.id}`)
      dispatch(modalClose())
      dispatch(
        alertSuccess(
          `Product "${data.name}" delete successfully.`
        )
      )
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
      <h1>Delete Product</h1>
      <div className={style.delete}>
        <div className={style.trashIcon}>
          <IconTrash />
        </div>
        <div className={style.deleteInfo}>
          <p>Are you sure you want to</p>
          <p>delete this product?</p>
          <b>"{data.name}"</b>
        </div>
      </div>

      <div className={style.btn}>
        <Button onClick={() => dispatch(modalEdit(data))}>
          cancel
        </Button>
        <Button
          solid="true"
          onClick={isLoading ? null : handleDeleteProduct}>
          {isLoading ? <IconLoader2 /> : 'Ya, Delete'}
        </Button>
      </div>
    </div>
  )
}
