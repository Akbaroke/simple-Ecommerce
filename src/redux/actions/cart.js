import ActionType from '../actionType'

export const addCart = (name, price, id) => ({
  type: ActionType.ADD_CART,
  payload: {
    name,
    price,
    id,
  },
})

export const incrementCart = (id, price) => ({
  type: ActionType.INCREMENT_CART,
  payload: {
    id,
    price,
  },
})

export const decrementCart = (id, price) => ({
  type: ActionType.DECREMENT_CART,
  payload: {
    id,
    price,
  },
})

export const deleteCart = id => ({
  type: ActionType.DELETE_CART,
  payload: {
    id,
  },
})

export const resetCart = () => ({
  type: ActionType.RESET_CART,
})