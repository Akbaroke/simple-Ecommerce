import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'
import Topbar from '../components/Topbar/Topbar'
import Cart from '../pages/Cart/Cart'
import Home from '../pages/Home/Home'
import Layout from '../components/Layout'

export default function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout>
              <Cart />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
