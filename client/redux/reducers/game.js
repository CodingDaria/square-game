const SET_FIELD = 'SET_FIELD'
const SET_YELLOW = 'SET_YELLOW'
const SET_GREEN = 'SET_GREEN'
const SET_RED = 'SET_RED'

const initialState = {
  fieldSize: { width: 5, height: 5 },
  squares: new Array(5 * 5).fill(null).map((it, index) => ({ id: index + 1, status: 'gray' }))
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FIELD:
      return {
        ...state,
        fieldSize: { width: action.x || 5, height: action.y || 5 },
        squares: action.squares
      }
    case SET_YELLOW:
      return {
        ...state,
        squares: state.squares.map((square) => action.square.id === square.id ? action.square : square)
      }
    case SET_GREEN:
      return {
        ...state,
        squares: state.squares.map((square) => action.square.id === square.id ? action.square : square)
      }
    case SET_RED:
      return {
        ...state,
        squares: state.squares.map((square) => action.square.id === square.id && !square.isClicked ? action.square : square)
      }
    default:
      return state
  }
}

export function setField(x, y) {
  return (dispatch) => {
    dispatch({
      type: SET_FIELD,
      x,
      y,
      squares: new Array(x * y).fill(null).map((it, index) => ({ id: index + 1, status: 'gray' }))
    })
  }
}

export function setYellow(square) {
  return (dispatch) => {
    dispatch({
      type: SET_YELLOW,
      square: { id: square.id, status: 'yellow' }
    })
  }
}

export function setGreen(square) {
  return (dispatch) => {
    dispatch({
      type: SET_GREEN,
      square: { id: square.id, status: 'green', isClicked: true }
    })
  }
}

export function setRed(square) {
  return (dispatch) => {
    dispatch({
      type: SET_RED,
      square: { id: square.id, status: 'red' }
    })
  }
}
