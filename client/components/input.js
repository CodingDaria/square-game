import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { history } from '../redux'
import { setField } from '../redux/reducers/game'

const Input = () => {
  const [width, setWidth] = useState(null)
  const [height, setHeight] = useState(null)
  const [disabledW, setDisabledW] = useState(true)
  const [disabledH, setDisabledH] = useState(true)
  const disabled = disabledW || disabledH
  const dispatch = useDispatch()
  const classes = `${
    disabled
      ? 'bg-gray-200 text-gray-400 pointer-events-none'
      : 'bg-gray-300 hover:bg-gray-400 text-gray-800'
  }`
  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-1/3 justify-center">
        <div>
          <input
            type="text"
            onChange={(e) => {
              if (!Number(e.target.value)) {
                e.target.value = ''
              }
              setWidth(e.target.value)
              if (e.target.value.length > 0) {
                setDisabledW(false)
              }
              if (e.target.value.length === 0) {
                setDisabledW(true)
              }
            }}
            placeholder="X"
            value={width}
            className="shadow appearance-none border border-gray-500 rounded w-full p-2 m-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            type="text"
            onChange={(e) => {
              if (!Number(e.target.value)) {
                e.target.value = ''
              }
              setHeight(e.target.value)
              if (e.target.value.length > 0) {
                setDisabledH(false)
              }
              if (e.target.value.length === 0) {
                setDisabledH(true)
              }
            }}
            placeholder="Y"
            value={height}
            className="shadow appearance-none border border-gray-500 rounded w-full p-2 m-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="button"
          id="auto-button"
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded items-center m-3"
          onClick={() => {
            setWidth(5)
            setHeight(5)
            setDisabledW(false)
            setDisabledH(false)
          }}
        >
          Default
        </button>
        <button
          type="button"
          id="go-button"
          className={`${classes} font-bold py-2 px-4 rounded items-center m-3`}
          disabled={disabled}
          onClick={() => {
            dispatch(setField(width, height))
            history.push('/game')
          }}
        >
          Go
        </button>
      </div>
    </div>
  )
}

Input.propTypes = {}

export default Input
