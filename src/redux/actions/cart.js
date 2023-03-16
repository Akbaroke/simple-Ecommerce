import ActionType from '../actionType'

export const addCart = (name, price, id) => ({
  type: ActionType.ADD_CART,
  payload: {
    name,
    price,
    id,
  },
})

export const incrementCart = id => ({
  type: ActionType.INCREMENT_CART,
  payload: {
    id,
  },
})

export const decrementCart = id => ({
  type: ActionType.DECREMENT_CART,
  payload: {
    id,
  },
})

export const deleteCart = id => ({
  type: ActionType.DELETE_CART,
  payload: {
    id,
  },
})
