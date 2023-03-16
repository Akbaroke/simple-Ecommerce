import ActionType from '../actionType'

const initState = {
  count: 0,
  total: 0,
  data: [],
}

const reducerCart = (state = initState, action) => {
  switch (action.type) {
    case ActionType.ADD_CART:
      const name = action.payload.name
      const price = action.payload.price
      const id = action.payload.id
      const newCart = {
        id: id,
        name: name,
        price: price,
        count: 1,
      }
      const newData = [...state.data, newCart]
      return {
        ...state,
        count: state.count + 1,
        data: newData,
      }
    case ActionType.INCREMENT_CART:
      const cardIdIncrement = action.payload.id
      const updateDataIncrement = state.data.map(cart => {
        if (cart.id === cardIdIncrement) {
          return {
            ...cart,
            count: cart.count + 1,
          }
        }
        return cart
      })
      return {
        ...state,
        data: updateDataIncrement,
      }
    case ActionType.DECREMENT_CART:
      const cardIdDecrement = action.payload.id
      const updateDataDecrement = state.data.map(cart => {
        if (cart.id === cardIdDecrement) {
          return {
            ...cart,
            count: cart.count - 1,
          }
        }
        return cart
      })
      return {
        ...state,
        data: updateDataDecrement,
      }
    case ActionType.DELETE_CART:
      const cardIdDelete = action.payload.id
      const updatedDataDecrement = state.data.filter(
        cart => cart.id !== cardIdDelete
      )
      return {
        ...state,
        count: state.count - 1,
        data: updatedDataDecrement,
      }
    default:
      return state
  }
}

export default reducerCart
