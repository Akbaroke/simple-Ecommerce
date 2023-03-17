import ActionType from '../actionType'

export const modalEdit = data => ({
  type: ActionType.MODAL_EDIT,
  payload: {
    data,
  },
})

export const modalAdd = () => ({
  type: ActionType.MODAL_ADD,
})

export const modalDelete = data => ({
  type: ActionType.MODAL_DELETE,
  payload: {
    data,
  },
})

export const modalClose = () => ({
  type: ActionType.MODAL_CLOSE,
})
