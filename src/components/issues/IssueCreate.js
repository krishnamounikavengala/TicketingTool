
import React, { useState } from 'react';
import { createIssue } from '../../services/mockApi';
import { useNavigate } from 'react-router-dom';

export default function IssueCreate() {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('Task');
  const nav = useNavigate();

  const create = async ()=>{
    await createIssue({ projectId:null, title, type, status:'todo', priority:'P3', assignee:'', storyPoints:0 });
    nav('/for-you');
  };

  return (
    <div className="card" role="region" aria-labelledby="create-issue">
      <h2 id="create-issue">Create Issue</h2>
      <div className="form-row"><label>Title<input value={title} onChange={e=>setTitle(e.target.value)} /></label></div>
      <div className="form-row"><label>Type<select value={type} onChange={e=>setType(e.target.value)}><option>Task</option><option>Bug</option><option>Story</option></select></label></div>
      <button className="btn" onClick={create}>Create</button>
    </div>
  );
}
