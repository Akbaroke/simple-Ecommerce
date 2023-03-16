import React, { useEffect } from 'react'
import style from './style.module.scss'
import AddProduct from './AddProduct'
import EditProduct from './EditProduct'
import ConfirmDelete from './ConfirmDelete'
import { useDispatch, useSelector } from 'react-redux'
import { modalClose } from '../../redux/actions/modal'
import Animated from 'react-mount-animation'
import globalType from '../../globalType'

export default function Modal() {
  const { isOpen, type } = useSelector(state => state.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    isOpen &&
      setTimeout(() => {
        dispatch(modalClose())
      }, 5000)
  }, [isOpen])

  return (
    <Animated.div
      show={isOpen}
      mountAnim={mountAnimation1}
      time={0.5}
      className={style.bgBlur}>
      {type === globalType.ADD && <AddProduct />}
      {type === globalType.EDIT && <EditProduct />}
      {type === globalType.DELETE && <ConfirmDelete />}
    </Animated.div>
  )
}

const mountAnimation1 = `
  0% {opacity: 0}
  0% {bottom: -200px}
  100% {opacity: 1}
  100% {bottom: 0}
`
