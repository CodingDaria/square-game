import React from 'react'
import Head from './head'
import Square from './square'

const Home = () => {
  const array = new Array(25).fill('')
  return (
    <div className="flex justify-center">
      <Head title="Hello" />
      Home
      <div className="flex flex-wrap w-2/4 border border-black m-5">
        {array.map((square, index) => {
          return (
            <div key={index}>
              <Square square={square} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
