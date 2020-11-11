import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateField, setYellow } from '../redux/reducers/game'
import Square from './square'
import './game.scss'

const Field = () => {
  const fieldSize = useSelector((store) => store.game.fieldSize)
  const squares = useSelector((store) => store.game.squares)
  const freeSquares = useSelector((store) => store.game.freeSquares)
  const containerWidth = 56 * fieldSize.width
  const dispatch = useDispatch()
  const getRandomSquare = () => {
    console.log(freeSquares.map((it) => `${it.id} ${it.status}`))
    return freeSquares[Math.floor(Math.random() * freeSquares.length)]
  }
  // const [selectedSquare] = useState(getRandomSquare())
  const nextSquare = () => {
    setTimeout(() => {
      const randomSquare = getRandomSquare()
      // console.log(randomSquare.id)
      dispatch(setYellow(randomSquare))
      nextSquare()
    }, 1000)
  }
  useEffect(() => {
    nextSquare()
    dispatch(updateField())
    // const timeoutId = setTimeout(() => {
    //   const randomSquare = getRandomSquare()
    //   dispatch(setYellow(randomSquare))
    // }, 1000)
    // console.log(timeoutId)
    // clearTimeout(timeoutId)
  }, [])
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
