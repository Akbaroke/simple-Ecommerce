import React from 'react'
import Container from './Container/Container'
import Topbar from './Topbar/Topbar'
import Alert from './Alert'
import Modal from './Modal'
import { useSelector } from 'react-redux'

export default function Layout({ children }) {
  const { isOpen } = useSelector(state => state.modal)
  return (
    <Container>
      <Alert />
      <Modal />
      {isOpen && (
        <span
          style={{
            display: 'block',
            position: 'absolute',
            zIndex: 29,
            width: '100%',
            height: '100%',
            backgroundColor: '#22341d40',
            backdropFilter: 'blur(2px)',
          }}></span>
      )}
      <Topbar />
      <div
        style={{
          padding: '20px 10px',
          paddingBottom: '100px',
          overflow: 'scroll',
          height: '100vh',
        }}>
        {children}
      </div>
    </Container>
  )
}
