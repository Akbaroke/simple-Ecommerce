import React from 'react'
import style from './style.module.scss'
import NumberOnly from '../../utils/NumberOnly'
import Button from '../Button/Button'

export default function EditProduct({ id }) {
  return (
    <div className={style.card}>
      <h1>Edit Product</h1>
      <form>
        <div>
          <label for="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="name product (max.10 char)"
            maxLength={10}
          />
        </div>
        <div>
          <label for="price">Price</label>
          <input
            type="text"
            name="price"
            placeholder="10000"
            maxLength={10}
            onKeyDown={e => NumberOnly(e)}
          />
        </div>
        <div>
          <label for="stock">Stock</label>
          <input
            type="text"
            name="stock"
            placeholder="1"
            maxLength={10}
            onKeyDown={e => NumberOnly(e)}
          />
        </div>
        <h3 className={style.linkDelete}>
          Delete this product ?
        </h3>
      </form>
      <div className={style.btn}>
        <Button>cancel</Button>
        <Button solid>save</Button>
      </div>
    </div>
  )
}
