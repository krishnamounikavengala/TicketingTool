
import React, { useEffect, useState } from 'react';
import { listProjects, addProject } from '../../services/mockApi';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { FiPlus } from 'react-icons/fi';

export default function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState('');
  const [key, setKey] = useState('');

  useEffect(()=>{ listProjects().then(setProjects); },[]);

  const create = async () => {
    const p = { id: uuidv4(), key: key.toUpperCase()||'PRJ', name, description:'', leads:[] };
    await addProject(p);
    setProjects(await listProjects());
    setName(''); setKey('');
  };

  return (
    <div className="grid">
      <div className="card" aria-labelledby="proj-create">
        <h2 id="proj-create">Create Project</h2>
        <div className="form-row"><label>Project Name<input value={name} onChange={e=>setName(e.target.value)} /></label></div>
        <div className="form-row"><label>Project Key<input value={key} onChange={e=>setKey(e.target.value)} /></label></div>
        <button className="btn" onClick={create}><FiPlus /> Create</button>
      </div>
      <div className="card" aria-labelledby="proj-list">
        <h2 id="proj-list">Projects</h2>
        <ul>{projects.map(p=>(<li key={p.id}><Link to={'/projects/'+p.id}><strong>{p.name}</strong> <span className="small">({p.key})</span></Link></li>))}</ul>
      </div>
    </div>
  );
}
