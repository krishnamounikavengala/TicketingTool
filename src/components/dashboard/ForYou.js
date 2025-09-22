
import React, { useEffect, useState } from 'react';
import { getCurrentUser, listIssues } from '../../services/mockApi';

export default function ForYou() {
  const [user, setUser] = useState(getCurrentUser());
  const [issues, setIssues] = useState([]);

  useEffect(()=>{ listIssues().then(setIssues); },[]);

  const mine = issues.filter(i=>i.assignee===user?.id);

  return (
    <div className="grid">
      <div className="card">
        <h2>For You</h2>
        <p className="small">Welcome back, {user?.name}</p>
        <h3>Your assigned issues</h3>
        <ul>{mine.map(i=>(<li key={i.id}>{i.title} — {i.status}</li>))}</ul>
      </div>
      <div className="card">
        <h3>Quick actions</h3>
        <div style={{display:'flex',flexDirection:'column',gap:8}}>
          <a className="btn" href="/issues/new">Create issue</a>
          <a className="btn" href="/projects">Create project</a>
        </div>
      </div>
    </div>
  );
}
