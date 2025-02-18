import React, { useState } from 'react'

const Login = () => {

  const [state, setState] = useState('Sign Up')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  //when we submit, it won't reload page
  const onSubmitHandler = async (event) => {
    event.preventDefault()
  }

  return (
    <form>

    </form>
  )
}

export default Login
