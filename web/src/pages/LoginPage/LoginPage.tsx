import { useState } from 'react'
import { navigate } from '@redwoodjs/router'
import "./login.css"
import Navbar from 'src/components/navbar'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    let baseUrl = "https://epothole.northroom.dev/"
    try {
      const response = await fetch(`${baseUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
      if (response.ok) {
        const { token } = await response.json()
        // Save the token in local storage or any other secure storage
        sessionStorage.setItem('token', token)
        // Redirect to the admin dashboard or another protected page
        navigate('/admin-dashboard')
      } else {
        // Handle login error or show a notification
      }
    } catch (error) {
      console.error('Error logging in:', error)
    }
  }

  return (
    <>
    <Navbar/>
    <div className="login-page">
      <h2>Login</h2>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
    </>
  )
}

export default LoginPage
