import React from 'react'
import Container from './Container/Container'
import Topbar from './Topbar/Topbar'
import Alert from './Alert'
import Modal from './Modal'

export default function Layout({ children }) {
  return (
    <Container>
      <Alert />
      <Modal />
      <Topbar />
      <div style={{ padding: '20px 10px' }}>{children}</div>
    </Container>
  )
}
