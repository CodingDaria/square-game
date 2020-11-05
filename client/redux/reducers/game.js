const SET_COLOR = 'SET_COLOR'

const initialState = {
  status: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_COLOR:
      return {
        ...state,
        status: action.status
      }
    default:
      return state
  }
}