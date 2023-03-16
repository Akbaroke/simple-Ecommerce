import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'
import Topbar from '../components/Topbar/Topbar'
import Cart from '../pages/Cart/Cart'
import Home from '../pages/Home/Home'

export default function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Topbar>
              <Home />
            </Topbar>
          }
        />
        <Route
          exact
          path="/cart"
          element={
            <Topbar>
              <Cart />
            </Topbar>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
