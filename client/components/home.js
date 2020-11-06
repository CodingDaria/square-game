import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Head from './head'
import Input from './input'
import Field from './field'
import './game.scss'

const Home = () => {
  return (
    <div className="flex justify-center">
      <Head title="Hello" />
      <Link to="/">Home</Link>
      <Switch>
        <Route exact path="/" component={() => <Input />} />
        <Route exact path="/game" component={() => <Field />} />
      </Switch>
    </div>
  )
}

Home.propTypes = {}

export default Home
