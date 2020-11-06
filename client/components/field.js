import React from 'react'
import { useSelector } from 'react-redux'
import Square from './square'
import './game.scss'

const Field = () => {
  const fieldSize = useSelector((store) => store.game.fieldSize)
  const containerWidth = 56 * fieldSize.width
  const array = new Array(fieldSize.width * fieldSize.height).fill('')
  return (
    <div style={{ width: containerWidth }} className="flex flex-wrap box-content border-2 border-gray-900 justify-start m-8">
      {array.map((square, index) => {
        return (
          <div key={index}>
            <Square square={square} />
          </div>
        )
      })}
    </div>
  )
}

Field.propTypes = {}

export default Field
