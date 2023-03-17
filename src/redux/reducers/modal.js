import globalType from '../../globalType'
import ActionType from '../actionType'

const initState = {
  isOpen: false,
  type: null,
  data: {
    id: null,
    name: null,
  },
}

const reducerModal = (state = initState, action) => {
  switch (action.type) {
    case ActionType.MODAL_EDIT:
      return {
        isOpen: true,
        type: globalType.EDIT,
        data: action.payload.data,
      }
    case ActionType.MODAL_ADD:
      return {
        ...state,
        isOpen: true,
        type: globalType.ADD,
      }
    case ActionType.MODAL_DELETE:
      return {
        isOpen: true,
        type: globalType.DELETE,
        data: action.payload.data,
      }
    case ActionType.MODAL_CLOSE:
      return initState
    default:
      return state
  }
}

export default reducerModal
