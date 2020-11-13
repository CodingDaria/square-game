import React from 'react'
import { useDispatch } from 'react-redux'
import { setGreen } from '../redux/reducers/game'
import './game.scss'

const Square = (props) => {
  const { square } = props
  const dispatch = useDispatch()
  const onClick = () => {
    if (square.status === 'yellow') {
      dispatch(setGreen(square))
    }
  }
  return (
    <button
      type="button"
      className={`bg-${square.status}-600 game-square`}
      onClick={onClick}
      aria-label="click"
    />
  )
}

Square.propTypes = {}

export default Square
