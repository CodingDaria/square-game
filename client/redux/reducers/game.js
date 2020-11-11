const SET_FIELD = 'SET_FIELD'
const UPDATE_FIELD = 'UPDATE_FIELD'
const SET_YELLOW = 'SET_YELLOW'

const initialState = {
  fieldSize: { width: 5, height: 5 },
  squares: new Array(5 * 5).fill(null).map((it, index) => ({ id: index + 1, status: 'gray' })),
  freeSquares: new Array(5 * 5).fill(null).map((it, index) => ({ id: index + 1, status: 'gray' }))
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FIELD:
      return {
        ...state,
        fieldSize: { width: action.x || 5, height: action.y || 5 },
        squares: action.squares
      }
    case UPDATE_FIELD:
      return {
        ...state,
        freeSquares: state.squares.filter((it) => it.status === 'gray')
      }
    case SET_YELLOW:
      return {
        ...state,
        squares: state.squares.map((square) => action.square.id === square.id ? { ...square, status: 'yellow' } : square)
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
      squares: new Array(x * y).fill(null).map((it, index) => ({ id: index + 1, status: 'gray' })),
      freeSquares: new Array(x * y).fill(null).map((it, index) => ({ id: index + 1, status: 'gray' }))
    })
  }
}

export function updateField() {
  return (dispatch) => {
    // const store = getState()
    // const { squares } = store.game
    dispatch({
      type: UPDATE_FIELD
    })
  }
}

export function setYellow(square) {
  return (dispatch) => {
    dispatch({
      type: SET_YELLOW,
      square
    })
  }
}
