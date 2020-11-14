import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setYellow, setRed } from '../redux/reducers/game'
import Square from './square'
import './game.scss'

const Field = () => {
  const fieldSize = useSelector((store) => store.game.fieldSize)
  const squares = useSelector((store) => store.game.squares)
  const dispatch = useDispatch()
  const [tid, setTimeoutId] = useState(null)
  const [final, setFinal] = useState('')
  const getRandomSquare = () => {
    const freeSquares = squares.filter((square) => square.status === 'gray')
    const free = Math.floor(Math.random() * freeSquares.length)
    return freeSquares[free]
  }
  const updateState = () => {
    const randomSquare = getRandomSquare()
    if (typeof randomSquare !== 'undefined') {
      dispatch(setYellow(randomSquare))
    }
    clearTimeout(tid)
    setTimeoutId(null)
  }
  const nextSquare = () => {
    const timeoutId = setTimeout(() => {
      updateState()
      squares.forEach((square) => {
        if (square.status === 'yellow') {
          dispatch(setRed(square))
        }
      })
    }, 1000)
    setTimeoutId(timeoutId)
    // console.log(squares.map((it) => `${it.id} ${it.status}`))
  }
  useEffect(() => {
    if (
      tid === null &&
      squares.find((square) => square.status === 'gray' || square.status === 'yellow')
    ) {
      nextSquare()
    }
    if (
      squares.filter((square) => square.status === 'red').length >=
        squares.filter((square) => square.status === 'green').length &&
      !squares.find((square) => square.status === 'gray' || square.status === 'yellow')
    ) {
      setFinal('You lost')
    } else if (
      squares.filter((square) => square.status === 'red').length <
        squares.filter((square) => square.status === 'green').length &&
      !squares.find((square) => square.status === 'gray' || square.status === 'yellow')
    ) {
      setFinal('You won')
    }
  }, [tid])
  const containerWidth = 56 * fieldSize.width
  return (
    <div className="flex flex-col items-center">
      <div
        style={{ width: `${containerWidth}px` }}
        className="flex flex-wrap box-content border-2 border-gray-900 justify-start m-8"
      >
        {squares.map((square) => {
          return <Square key={square.id} square={square} />
        })}
      </div>
      <div className="font-semibold text-6xl">{final}</div>
    </div>
  )
}

Field.propTypes = {}

export default Field
