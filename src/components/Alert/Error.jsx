import React from 'react'
import style from './style.module.scss'
import { IconX } from '@tabler/icons-react'
import { useDispatch, useSelector } from 'react-redux'
import { alertClose } from '../../redux/actions/alert'

export default function Error() {
  const dispact = useDispatch()
  const { message } = useSelector(state => state.alert)

  return (
    <div className={style.Error}>
      <p>{message || 'Action Error.'}</p>
      <span onClick={() => dispact(alertClose(message))}>
        <IconX />
      </span>
    </div>
  )
}
