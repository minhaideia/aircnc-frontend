import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    async function handleSubmit(event) {
      event.preventDefault();
  
      const response = await api.post('sessions', {
        email,
        password,
      });
  
      const { _id } = response.data;
      localStorage.setItem('user', _id);
      
      history.push('/dashboard');

    }
  
    return (
    <>
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para a sua empresa.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <label htmlFor="password">SENHA *</label>          
          <input 
            type="password" 
            id="password" 
            placeholder="Crie sua senha"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />

          <button className="btn" type="submit">Entrar</button>          
        </form>
    </>
    );
}