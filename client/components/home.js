import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import { useSelector } from 'react-redux'
import Head from './head'
import Header from './header'
import Input from './input'
import Field from './field'
// import './game.scss'

const Home = () => {
  // const freeSquares = useSelector((store) => store.game.freeSquares)
  return (
    <div>
      <Head title="Hello" />
      <Header />
      <Switch>
        <Route exact path="/" component={() => <Input />} />
        <Route exact path="/game" component={() => <Field />} />
      </Switch>
    </div>
  )
}

Home.propTypes = {}

export default Home
