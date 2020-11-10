import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Square from './square'
import './game.scss'

const Field = () => {
  const fieldSize = useSelector((store) => store.game.fieldSize)
  const containerWidth = 56 * fieldSize.width
  const array = new Array(fieldSize.width * fieldSize.height)
    .fill(null)
    .map((it, index) => ({ id: index + 1, status: 'gray' }))
  // const randomSquare = array.filter((it) => it.status === 'gray')[Math.floor(Math.random() * array.length)]
  useEffect(() => {
    // const timeoutId = setTimeout(() => {
    //   return
    // }, 1000)
    // clearTimeout(timeoutId)
    return 1
  }, [])
  return (
    <div
      style={{ width: containerWidth }}
      className="flex flex-wrap box-content border-2 border-gray-900 justify-start m-8"
    >
      {array.map((square) => {
        return (
          <div key={square.id}>
            <Square square={square} />
          </div>
        )
      })}
    </div>
  )
}

Field.propTypes = {}

export default Field
