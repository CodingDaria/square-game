import React from 'react'
import { useDispatch } from 'react-redux'
import { setGreen } from '../redux/reducers/game'
import './game.scss'

const Square = (props) => {
  const { square } = props
  const dispatch = useDispatch()
  const classes = `${square.status === 'gray' ? 'bg-gray-500' : ''}${
    square.status === 'yellow' ? 'bg-yellow-500' : ''
  }${square.status === 'green' ? 'bg-green-500' : ''}${square.status === 'red' ? 'bg-red-500' : ''}`
  const onClick = () => {
    if (square.status === 'yellow') {
      dispatch(setGreen(square))
    }
  }
  return (
    <button
      type="button"
      className={`${classes} game-square`}
      onClick={onClick}
      aria-label="click"
    />
  )
}

Square.propTypes = {}

export default Square
