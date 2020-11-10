import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { history } from '../redux'
import { setField } from '../redux/reducers/game'

const Input = () => {
  const [width, setWidth] = useState(5)
  const [height, setHeight] = useState(5)
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => setWidth(e.target.value)}
          placeholder="X"
          className="shadow appearance-none border rounded w-full p-2 m-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <input
          type="text"
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Y"
          className="shadow appearance-none border rounded w-full p-2 m-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="button"
        id="go-button"
        onClick={() => {
          dispatch(setField(width, height))
          history.push('/game')
        }}
      >
        Go
      </button>
    </div>
  )
}

Input.propTypes = {}

export default Input
