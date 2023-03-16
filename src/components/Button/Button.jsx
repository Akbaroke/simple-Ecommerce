import React from 'react'

export default function Button(
  { children, solid },
  ...props
) {
  return (
    <button
      {...props}
      style={solid ? style.buttonSolid : style.button}>
      {children}
    </button>
  )
}

const style = {
  button: {
    backgroundColor: '#fff',
    border: '1px solid #21331D',
    width: 130,
    height: 40,
    fontSize: 14,
    fontWeight: 600,
    color: '#21331D',
    cursor: 'pointer',
    textTransform: 'capitalize',
  },
  buttonSolid: {
    backgroundColor: '#21331D',
    width: 130,
    height: 40,
    fontSize: 14,
    fontWeight: 600,
    color: '#fff',
    cursor: 'pointer',
    textTransform: 'capitalize',
  },
}
