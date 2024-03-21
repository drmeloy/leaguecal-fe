"use client"

import { useState } from "react"
import { loginOrSignupUser } from './api';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [page, setPage] = useState<'login' | 'signup'>('login');

  const otherPage = page === 'login' ? 'signup' : 'login';

  const togglePage = () => setPage(otherPage);

  return (
  <>
    <div>{page} page</div>
    <button onClick={togglePage}>Go to {otherPage} page</button>
    <span>Username: </span>
    <input type='text' value={username} onChange={({ target }) => setUsername(target.value)} />
    <span>Password: </span>
    <input type='text' value={password} onChange={({ target }) => setPassword(target.value)} />
    <button onClick={() => loginOrSignupUser(username, password, page)}>Login</button>
  </>
  )
}