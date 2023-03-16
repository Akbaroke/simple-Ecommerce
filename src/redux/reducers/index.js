import { combineReducers } from '@reduxjs/toolkit'
import reducerCart from './cart'
import reducerAlert from './alert'
import reducerModal from './modal'

const rootReducer = combineReducers({
  cart: reducerCart,
  alert: reducerAlert,
  modal: reducerModal,
})

export default rootReducer
