import React from 'react'
import { useState, useEffect } from 'react'
import { userAuthentication } from '../../hooks/userAuthentication'


const Register = () => {
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassoword] = useState('')
  const [confirmedPassword, setCorfimedPassord] = useState('')
  const [error, setError] = useState('')

  const {creatUser, error: authError, loading} = userAuthentication()
  
  const handlerSubmit = async (e) => {
    e.preventDefault()
    setError('')
    const user = {
      displayName,
      email,
      password
    }

    if(password != confirmedPassword){
      setError('As senhas precisam ser iguais, onii-chan >.<"')
      return
    }

    const res = await creatUser(user)

    console.table(res)
  }
  return (
    <div>
      <h1>Compartilhe suas experiências com outros nomades</h1>
      <form onSubmit={handlerSubmit}>
        <label>
          <span>Nome: </span>
          <input type="text"
            name="displayName"
            required
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder='Entre com seu nome nomade' />
        </label>

        <label>
          <span>E-mail: </span>
          <input type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Entre com seu e-mail' />
        </label>

        <label>
          <span>Senha: </span>
          <input type="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassoword(e.target.value)}
            placeholder='Entre com sua senha' />
        </label>

        <label>
          <span>Confirmação: </span>
          <input type="password"
            name="confirmedPassword"
            required
            value={confirmedPassword}
            onChange={(e) => setCorfimedPassord(e.target.value)}
            placeholder='Entre com sua senha' />
        </label>
        
        <button className='btn'>Cadastrar</button>
        {error && <p className='error'>{error}</p>}

      </form>
    </div>
  )
}

export default Register;