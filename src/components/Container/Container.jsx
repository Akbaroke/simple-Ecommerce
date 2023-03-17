import React from 'react'

export default function Container({ children }) {
  return <div style={style}>{children}</div>
}

const style = {
  position: 'relative',
  maxWidth: 428,
  height: '100vh',
  overflow: 'hidden',
  margin: 'auto',
}
