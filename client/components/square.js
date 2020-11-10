import React from 'react'
import './game.scss'

const Square = (props) => {
  const { square } = props
  return <button type="button" className={`bg-${square.status}-600 game-square`} />
}

Square.propTypes = {}

export default Square
