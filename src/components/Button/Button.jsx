import React from 'react'
import style from './style.module.scss'

export default function Button(props) {
  const { children, solid } = props
  return (
    <button
      {...props}
      className={solid ? style.buttonSolid : style.button}>
      {children}
    </button>
  )
}
