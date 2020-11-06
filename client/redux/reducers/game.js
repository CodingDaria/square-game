const SET_STATUS = 'SET_STATUS'
const SET_FIELD = 'SET_FIELD'

const initialState = {
  status: false,
  fieldSize: { width: 5, height: 5 }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
    case SET_FIELD:
      return {
        ...state,
        fieldSize: { width: action.x || 5, height: action.y || 5 }
      }
    default:
      return state
  }
}

export function setStatus(status) {
  return (dispatch) => {
    dispatch({
      type: SET_STATUS,
      status
    })
  }
}

export function setField(x, y) {
  return (dispatch) => {
    dispatch({
      type: SET_FIELD,
      x,
      y
    })
  }
}
