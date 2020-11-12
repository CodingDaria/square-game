import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setYellow } from '../redux/reducers/game'
import Square from './square'
import './game.scss'

const Field = () => {
  const fieldSize = useSelector((store) => store.game.fieldSize)
  const squares = useSelector((store) => store.game.squares)
  // const { freeSquares } = props
  const freeSquares = useSelector((store) => store.game.freeSquares)
  const containerWidth = 56 * fieldSize.width
  const dispatch = useDispatch()
  const [tid, setTimeoutId] = useState(null)
  // const [selectedSquare] = useState(getRandomSquare())
  const getRandomSquare = () => {
    const free = Math.floor(Math.random() * freeSquares.length)
    // console.log(freeSquares.map((it) => `${it.id} ${it.status}`))
    return freeSquares[free]
  }
  const updateState = () => {
    dispatch(setYellow(getRandomSquare()))
    clearTimeout(tid)
    setTimeoutId(null)
  }
  const nextSquare = () => {
    const timeoutId = setTimeout(() => {
      updateState()
    }, 1000)
    setTimeoutId(timeoutId)
    console.log(freeSquares.length)
  }
  useEffect(() => {
    if (tid === null && freeSquares.length > 0) {
      nextSquare()
    }
  }, [tid])
  return (
    <div
      style={{ width: `${containerWidth}px` }}
      className="flex flex-wrap box-content border-2 border-gray-900 justify-start m-8"
    >
      {squares.map((square) => {
        return <Square key={square.id} square={square} />
      })}
    </div>
  )
}

Field.propTypes = {}

export default Field
