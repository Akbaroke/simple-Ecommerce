import React from 'react'
import style from './style.module.scss'
import Button from '../Button/Button'
import { IconTrash } from '@tabler/icons-react'

export default function ConfirmDelete() {
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
          <b>"Aqua"</b>
        </div>
      </div>

      <div className={style.btn}>
        <Button>cancel</Button>
        <Button solid>Ya, Delete</Button>
      </div>
    </div>
  )
}
