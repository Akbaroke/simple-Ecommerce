import globalType from '../../globalType'
import ActionType from '../actionType'

const initState = {
  isOpen: false,
  type: null,
  message: null,
}

const reducerAlert = (state = initState, action) => {
  switch (action.type) {
    case ActionType.ALERT_SUCCESS:
      return {
        isOpen: true,
        type: globalType.SUCCESS,
        message: action.payload.message,
      }
    case ActionType.ALERT_ERROR:
      return {
        isOpen: true,
        type: globalType.ERROR,
        message: action.payload.message,
      }
    case ActionType.ALERT_ERROR:
      return {
        isOpen: true,
        type: globalType.ERROR,
        message: action.payload.message,
      }
    case ActionType.ALERT_CLOSE:
      return initState
    default:
      return state
  }
}

export default reducerAlert
