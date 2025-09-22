
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FiMail, FiLock } from 'react-icons/fi';

export default function Login() {
  const [email, setEmail] = useState('admin@demo.com');
  const [password, setPassword] = useState('password');
  const [err, setErr] = useState('');
  const { login } = useAuth();
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await login(email,password);
      nav('/for-you');
    } catch(e) { setErr('Login failed'); }
  };

  return (
    <div style={{maxWidth:480,margin:'48px auto'}} className="card" role="region" aria-labelledby="login-title">
      <h2 id="login-title">Sign in</h2>
      <form onSubmit={submit} aria-describedby="login-desc">
        <p id="login-desc" className="small">Demo mode — any password accepted.</p>
        <label className="form-row"><span>Email</span><div style={{display:'flex',alignItems:'center',gap:8}}><FiMail aria-hidden="true" /><input aria-label="Email" value={email} onChange={e=>setEmail(e.target.value)} required /></div></label>
        <label className="form-row"><span>Password</span><div style={{display:'flex',alignItems:'center',gap:8}}><FiLock aria-hidden="true" /><input aria-label="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required /></div></label>
        <div style={{display:'flex',gap:8,alignItems:'center'}}><button className="btn" type="submit">Sign in</button><button type="button" className="btn" onClick={()=>{setEmail('alice@demo.com');setPassword('password')}}>Quick demo</button></div>
        {err && <p role="alert" style={{color:'red'}}>{err}</p>}
      </form>
    </div>
  );
}
