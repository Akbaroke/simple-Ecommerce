import React, { useEffect } from 'react'
import style from './style.module.scss'
import Success from './Success'
import Error from './Error'
import Animated from 'react-mount-animation'
import globalType from '../../globalType'
import { useDispatch, useSelector } from 'react-redux'
import { alertClose } from '../../redux/actions/alert'

export default function Alert() {
  const { isOpen, type } = useSelector(state => state.alert)
  const dispatch = useDispatch()

  useEffect(() => {
    isOpen &&
      setTimeout(() => {
        dispatch(alertClose())
      }, 5000)
  }, [isOpen])

  return (
    <Animated.div
      show={isOpen}
      mountAnim={mountAnimation1}
      time={0.5}
      className={style.alert}>
      {type === globalType.SUCCESS && <Success />}
      {type === globalType.ERROR && <Error />}
    </Animated.div>
  )
}

const mountAnimation1 = `
  0% {opacity: 0}
  0% {left: -200px}
  100% {opacity: 1}
`
