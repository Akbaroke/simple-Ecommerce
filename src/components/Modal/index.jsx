import React from 'react'
import style from './style.module.scss'
import AddProduct from './AddProduct'
import EditProduct from './EditProduct'
import ConfirmDelete from './ConfirmDelete'
import { useSelector } from 'react-redux'
import Animated from 'react-mount-animation'
import globalType from '../../globalType'

export default function Modal() {
  const { isOpen, type, data } = useSelector(
    state => state.modal
  )

  return (
    <Animated.div
      show={isOpen}
      mountAnim={mountAnimation1}
      time={0.5}
      className={style.bg}>
      {type === globalType.ADD && <AddProduct />}
      {type === globalType.EDIT && (
        <EditProduct data={data} />
      )}
      {type === globalType.DELETE && (
        <ConfirmDelete data={data} />
      )}
    </Animated.div>
  )
}

const mountAnimation1 = `
  0% {opacity: 0}
  0% {bottom: -200px}
  100% {opacity: 1}
  100% {bottom: 0}
`
