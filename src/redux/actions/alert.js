import ActionType from '../actionType'

export const alertSuccess = message => ({
  type: ActionType.ALERT_SUCCESS,
  payload: {
    message,
  },
})

export const alertError = message => ({
  type: ActionType.ALERT_ERROR,
  payload: {
    message,
  },
})

export const alertClose = () => ({
  type: ActionType.ALERT_CLOSE,
})
