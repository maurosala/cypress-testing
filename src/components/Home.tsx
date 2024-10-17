import { Fragment, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const goodHandler = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        setMessage(`Hello ${name}`)
      })
      .catch((error) => {
        setMessage(error.message)
      })
  }
  const badHandler = () => {
    if (name === '') {
      setMessage('Please enter your name')
      return
    }

    axios
      .post('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        setMessage(response.data.title)
      })
      .catch((error) => {
        setMessage(error.status)
      })
  }

  return (
    <Fragment>
      <input
        type='text'
        placeholder='Enter your name'
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <button
          type='button'
          aria-label='Good Call'
          onClick={goodHandler}
          disabled={name === ''}
        >
          Good Call
        </button>
        <button type='button' aria-label='Bad Call' onClick={badHandler}>
          Bad Call
        </button>
      </div>
      <h1>{message}</h1>
      <Link to='about' aria-label='About'>
        About
      </Link>
    </Fragment>
  )
}

export default Home
