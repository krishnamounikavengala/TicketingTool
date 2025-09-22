
import React, { useEffect, useState } from 'react';
import { listAssets, addAsset } from '../../services/mockApi';
import { v4 as uuidv4 } from 'uuid';

export default function Assets() {
  const [assets, setAssets] = useState([]);
  const [name, setName] = useState('');
  const [type, setType] = useState('Laptop');
  useEffect(()=>{ listAssets().then(setAssets); },[]);

  const add = async ()=>{ const a = { id: uuidv4(), name, type, owner:'', status:'active' }; await addAsset(a); setAssets(await listAssets()); setName(''); };
  return (
    <div className="grid">
      <div className="card">
        <h2>Add Asset</h2>
        <div className="form-row"><label>Name<input value={name} onChange={e=>setName(e.target.value)} /></label></div>
        <div className="form-row"><label>Type<input value={type} onChange={e=>setType(e.target.value)} /></label></div>
        <button className="btn" onClick={add}>Add Asset</button>
      </div>
      <div className="card">
        <h2>Assets</h2>
        <ul>{assets.map(a=>(<li key={a.id}>{a.name} — {a.type} — {a.status}</li>))}</ul>
      </div>
    </div>
  );
}
