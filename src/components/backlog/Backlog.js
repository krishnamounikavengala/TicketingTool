
import React, { useEffect, useState } from 'react';
import { listIssues, createIssue } from '../../services/mockApi';
import { useParams } from 'react-router-dom';

export default function Backlog() {
  const { projectId } = useParams();
  const [issues, setIssues] = useState([]);
  const [title, setTitle] = useState('');
  const [type, setType] = useState('Story');
  const [points, setPoints] = useState(3);

  useEffect(()=>{ listIssues(projectId).then(setIssues); },[projectId]);

  const add = async ()=>{
    const data = { projectId: projectId||null, title, type, status:'todo', priority:'P3', assignee:'', storyPoints:points };
    await createIssue(data);
    setIssues(await listIssues(projectId));
    setTitle(''); setPoints(3);
  };

  return (
    <div className="card" role="region" aria-labelledby="backlog-title">
      <h2 id="backlog-title">Backlog {projectId?`- ${projectId}`:''}</h2>
      <div style={{display:'flex',gap:12}}>
        <div style={{flex:1}}>
          <div className="form-row"><label>Title<input value={title} onChange={e=>setTitle(e.target.value)} /></label></div>
          <div className="form-row"><label>Type<select value={type} onChange={e=>setType(e.target.value)}><option>Story</option><option>Task</option><option>Bug</option></select></label></div>
          <div className="form-row"><label>Story Points<input type="number" value={points} onChange={e=>setPoints(e.target.value)} /></label></div>
          <button className="btn" onClick={add}>Add to Backlog</button>
        </div>
        <div style={{flex:2}}>
          <h3>Backlog Items</h3>
          <ul>{issues.map(i=>(<li key={i.id}>{i.title} — <em>{i.type}</em> — {i.storyPoints} pts</li>))}</ul>
        </div>
      </div>
    </div>
  );
}
