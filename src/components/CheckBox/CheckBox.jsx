import { IconCheck } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import style from './style.module.scss'

export default function CheckBox({ check, children }) {
  const [isCheck, setIsCheck] = useState(check)

  useEffect(() => {
    setIsCheck(check)
  }, [check])

  return (
    <span
      className={isCheck ? style.checkActive : style.check}
      onClick={() => setIsCheck(!isCheck)}>
      {isCheck ? children ? children : <IconCheck /> : null}
    </span>
  )
}
