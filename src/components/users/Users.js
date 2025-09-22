
import React, { useEffect, useState } from 'react';
import { listUsers, addUser } from '../../services/mockApi';
import { v4 as uuidv4 } from 'uuid';
import { FiUserPlus } from 'react-icons/fi';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Developer');

  useEffect(()=>{ listUsers().then(setUsers); },[]);

  const create = async () => {
    const u = { id: uuidv4(), name, email, role };
    await addUser(u);
    setUsers(await listUsers());
    setName(''); setEmail('');
  };

  return (
    <div className="grid">
      <div className="card" aria-labelledby="users-title">
        <h2 id="users-title">Users</h2>
        <div className="form-row"><label>Name<input value={name} onChange={e=>setName(e.target.value)} /></label></div>
        <div className="form-row"><label>Email<input value={email} onChange={e=>setEmail(e.target.value)} /></label></div>
        <div className="form-row"><label>Role<select value={role} onChange={e=>setRole(e.target.value)}><option>Admin</option><option>Manager</option><option>Developer</option><option>Reporter</option></select></label></div>
        <button className="btn" onClick={create}><FiUserPlus style={{verticalAlign:'middle',marginRight:6}} /> Create user</button>
      </div>
      <div className="card" aria-labelledby="users-list-title">
        <h2 id="users-list-title">All users</h2>
        <table className="table" role="table" aria-label="Users table">
          <thead><tr><th>Name</th><th>Email</th><th>Role</th></tr></thead>
          <tbody>{users.map(u=>(<tr key={u.id}><td>{u.name}</td><td>{u.email}</td><td>{u.role}</td></tr>))}</tbody>
        </table>
      </div>
    </div>
  );
}
