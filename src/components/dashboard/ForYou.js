
// // import React, { useEffect, useState } from 'react';
// // import { getCurrentUser, listIssues } from '../../services/mockApi';

// // export default function ForYou() {
// //   const [user, setUser] = useState(getCurrentUser());
// //   const [issues, setIssues] = useState([]);

// //   useEffect(()=>{ listIssues().then(setIssues); },[]);

// //   const mine = issues.filter(i=>i.assignee===user?.id);

// //   return (
// //     <div className="grid">
// //       <div className="card">
// //         <h2>For You</h2>
// //         <p className="small">Welcome back, {user?.name}</p>
// //         <h3>Your assigned issues</h3>
// //         <ul>{mine.map(i=>(<li key={i.id}>{i.title} — {i.status}</li>))}</ul>
// //       </div>
// //       <div className="card">
// //         <h3>Quick actions</h3>
// //         <div style={{display:'flex',flexDirection:'column',gap:8}}>
// //           <a className="btn" href="/issues/new">Create issue</a>
// //           <a className="btn" href="/projects">Create project</a>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }




// import React, { useEffect, useState } from 'react';
// import { getCurrentUser, listIssues, listNotifs } from '../../services/mockApi';

// export default function ForYou() {
//   const [user, setUser] = useState(getCurrentUser());
//   const [issues, setIssues] = useState([]);
//   const [notifications, setNotifications] = useState([]);
//   const [showTodayOnly, setShowTodayOnly] = useState(false);

//   useEffect(() => {
//     listIssues().then(setIssues);
//     listNotifs().then(setNotifications);
//   }, []);

//   const mine = issues.filter(i => i.assignee === user?.id);

//   const today = new Date().toISOString().slice(0, 10);
//   const thisWeek = new Date();
//   thisWeek.setDate(thisWeek.getDate() + 7);
//   const weekEnd = thisWeek.toISOString().slice(0, 10);

//   const filteredIssues = mine.filter(i => {
//     if (!i.dueDate) return false;
//     if (showTodayOnly) return i.dueDate === today;
//     return i.dueDate >= today && i.dueDate <= weekEnd;
//   });

//   const containerStyle = {
//     padding: '2rem',
//     fontFamily: 'Segoe UI, sans-serif',
//     backgroundColor: '#f4f6f8',
//   };

//   const headerStyle = {
//     marginBottom: '2rem',
//   };

//   const gridStyle = {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//     gap: '1.5rem',
//   };

//   const cardStyle = {
//     background: '#fff',
//     borderRadius: '8px',
//     padding: '1.5rem',
//     boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
//     transition: 'box-shadow 0.3s ease',
//   };

//   const cardHoverStyle = {
//     ...cardStyle,
//     boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//   };

//   const btnStyle = {
//     backgroundColor: '#1976d2',
//     color: 'white',
//     padding: '0.6rem 1rem',
//     borderRadius: '6px',
//     textDecoration: 'none',
//     textAlign: 'center',
//     marginBottom: '0.5rem',
//     display: 'inline-block',
//   };

//   const statusStyle = status => ({
//     fontSize: '0.85rem',
//     padding: '0.2rem 0.5rem',
//     borderRadius: '4px',
//     marginRight: '0.5rem',
//     backgroundColor: status === 'Open' ? '#e0f7fa' : '#fbe9e7',
//     color: status === 'Open' ? '#00796b' : '#d84315',
//   });

//   return (
//     <div style={containerStyle}>
//       <div style={headerStyle}>
//         <h1>👋 Welcome, {user?.name}</h1>
//         <p>Here’s what’s happening this week</p>
//       </div>

//       <div style={gridStyle}>
//         {/* Assigned Tasks */}
//         <div style={cardStyle}>
//           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//             <h2>🗂️ Your Boards</h2>
//             <label style={{ fontSize: '0.9rem' }}>
//               <input
//                 type="checkbox"
//                 checked={showTodayOnly}
//                 onChange={() => setShowTodayOnly(!showTodayOnly)}
//                 style={{ marginRight: '0.5rem' }}
//               />
//               Show only today's tasks
//             </label>
//           </div>
//           <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
//             {filteredIssues.length > 0 ? (
//               filteredIssues.map(i => (
//                 <li key={i.id} style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>
//                   <strong>{i.title}</strong><br />
//                   <span style={statusStyle(i.status)}>{i.status}</span>
//                   <span style={{ fontSize: '0.8rem', color: '#666' }}>Due: {i.dueDate}</span>
//                 </li>
//               ))
//             ) : (
//               <li style={{ color: '#999', fontStyle: 'italic' }}>No tasks found</li>
//             )}
//           </ul>
//         </div>

//         {/* Notifications */}
//         <div style={cardStyle}>
//           <h2>🔔 Notifications & Mentions</h2>
//           <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
//             {notifications.length > 0 ? (
//               notifications.map(n => (
//                 <li key={n.id} style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>
//                   {n.message}
//                 </li>
//               ))
//             ) : (
//               <li style={{ color: '#999', fontStyle: 'italic' }}>No new notifications</li>
//             )}
//           </ul>
//         </div>

//         {/* Recently Viewed */}
//         <div style={cardStyle}>
//           <h2>🕵️ Recently Viewed</h2>
//           <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Feature coming soon</p>
//         </div>

//         {/* Quick Actions */}
//         <div style={cardStyle}>
//           <h2>⚡ Quick Actions</h2>
//           <div style={{ display: 'flex', flexDirection: 'column', marginTop: '1rem' }}>
//             <a style={btnStyle} href="/issues/new">➕ Create Issue</a>
//             <a style={btnStyle} href="/projects">📁 Create Project</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from 'react';
// import { getCurrentUser, listIssues, listNotifs } from '../../services/mockApi';
// import { useNavigate } from 'react-router-dom';

// export default function ForYou() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(getCurrentUser());
//   const [issues, setIssues] = useState([]);
//   const [notifications, setNotifications] = useState([]);
//   const [showTodayOnly, setShowTodayOnly] = useState(false);

//   useEffect(() => {
//     listIssues().then(setIssues);
//     listNotifs().then(setNotifications);
//   }, []);

//   const mine = issues.filter(i => i.assignee === user?.id);

//   const today = new Date().toISOString().slice(0, 10);
//   const thisWeek = new Date();
//   thisWeek.setDate(thisWeek.getDate() + 7);
//   const weekEnd = thisWeek.toISOString().slice(0, 10);

//   const filteredIssues = mine.filter(i => {
//     if (!i.dueDate) return false;
//     if (showTodayOnly) return i.dueDate === today;
//     return i.dueDate >= today && i.dueDate <= weekEnd;
//   });

//   const containerStyle = { padding: '2rem', fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f4f6f8' };
//   const headerStyle = { marginBottom: '2rem' };
//   const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' };
//   const cardStyle = { background: '#fff', borderRadius: '8px', padding: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' };
//   const btnStyle = { backgroundColor: '#1976d2', color: 'white', padding: '0.6rem 1rem', borderRadius: '6px', textAlign: 'center', marginBottom: '0.5rem', cursor: 'pointer', border: 'none' };
//   const statusStyle = status => ({
//     fontSize: '0.85rem',
//     padding: '0.2rem 0.5rem',
//     borderRadius: '4px',
//     marginRight: '0.5rem',
//     backgroundColor: status === 'Open' ? '#e0f7fa' : '#fbe9e7',
//     color: status === 'Open' ? '#00796b' : '#d84315',
//   });

//   return (
//     <div style={containerStyle}>
//       <div style={headerStyle}>
//         <h1>👋 Welcome, {user?.name}</h1>
//         <p>Here’s what’s happening this week</p>
//       </div>

//       <div style={gridStyle}>
//         {/* Assigned Tasks */}
//         <div style={cardStyle}>
//           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//             <h2>🗂️ Your Boards</h2>
//             <label style={{ fontSize: '0.9rem' }}>
//               <input
//                 type="checkbox"
//                 checked={showTodayOnly}
//                 onChange={() => setShowTodayOnly(!showTodayOnly)}
//                 style={{ marginRight: '0.5rem' }}
//               />
//               Show only today's tasks
//             </label>
//           </div>
//           <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
//             {filteredIssues.length > 0 ? (
//               filteredIssues.map(i => (
//                 <li key={i.id} style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>
//                   <strong>{i.title}</strong><br />
//                   <span style={statusStyle(i.status)}>{i.status}</span>
//                   <span style={{ fontSize: '0.8rem', color: '#666' }}> Due: {i.dueDate}</span>
//                 </li>
//               ))
//             ) : (
//               <li style={{ color: '#999', fontStyle: 'italic' }}>No tasks found</li>
//             )}
//           </ul>
//         </div>

//         {/* Notifications */}
//         <div style={cardStyle}>
//           <h2>🔔 Notifications & Mentions</h2>
//           <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
//             {notifications.length > 0 ? (
//               notifications.map(n => (
//                 <li key={n.id} style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>
//                   {n.message}
//                 </li>
//               ))
//             ) : (
//               <li style={{ color: '#999', fontStyle: 'italic' }}>No new notifications</li>
//             )}
//           </ul>
//         </div>

//         {/* Recently Viewed */}
//         <div style={cardStyle}>
//           <h2>🕵️ Recently Viewed</h2>
//           <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Feature coming soon</p>
//         </div>

//         {/* Quick Actions */}
//         <div style={cardStyle}>
//           <h2>⚡ Quick Actions</h2>
//           <div style={{ display: 'flex', flexDirection: 'column', marginTop: '1rem' }}>
//             <button style={btnStyle} onClick={() => navigate('/issues/new')}>
//               ➕ Create Issue
//             </button>
//             <button style={{ ...btnStyle, backgroundColor: '#10b981' }} onClick={() => navigate('/projects/new')}>
//               📁 Create Project
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }







// import React, { useEffect, useState } from 'react';
// import { getCurrentUser, listIssues, listNotifs } from '../../services/mockApi';
// import { useNavigate } from 'react-router-dom';

// export default function ForYou() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(getCurrentUser());
//   const [issues, setIssues] = useState([]);
//   const [notifications, setNotifications] = useState([]);
//   const [showTodayOnly, setShowTodayOnly] = useState(false);

//   useEffect(() => {
//     listIssues().then(setIssues);
//     listNotifs().then(setNotifications);
//   }, []);

//   const mine = issues.filter(i => i.assignee === user?.id);

//   const today = new Date().toISOString().slice(0, 10);
//   const thisWeek = new Date();
//   thisWeek.setDate(thisWeek.getDate() + 7);
//   const weekEnd = thisWeek.toISOString().slice(0, 10);

//   const filteredIssues = mine.filter(i => {
//     if (!i.dueDate) return false;
//     if (showTodayOnly) return i.dueDate === today;
//     return i.dueDate >= today && i.dueDate <= weekEnd;
//   });

//   const containerStyle = { padding: '2rem', fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f4f6f8' };
//   const headerStyle = { marginBottom: '2rem' };
//   const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' };
//   const cardStyle = { background: '#fff', borderRadius: '8px', padding: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' };
//   const btnStyle = { backgroundColor: '#1976d2', color: 'white', padding: '0.6rem 1rem', borderRadius: '6px', textAlign: 'center', marginBottom: '0.5rem', cursor: 'pointer', border: 'none' };
//   const statusStyle = status => ({
//     fontSize: '0.85rem',
//     padding: '0.2rem 0.5rem',
//     borderRadius: '4px',
//     marginRight: '0.5rem',
//     backgroundColor: status === 'Open' ? '#e0f7fa' : '#fbe9e7',
//     color: status === 'Open' ? '#00796b' : '#d84315',
//   });

//   return (
//     <div style={containerStyle}>
//       <div style={headerStyle}>
//         <h1>👋 Welcome, {user?.name}</h1>
//         <p>Here’s what’s happening this week</p>
//       </div>

//       <div style={gridStyle}>
//         {/* Assigned Tasks */}
//         <div style={cardStyle}>
//           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//             <h2>🗂️ Your Boards</h2>
//             <label style={{ fontSize: '0.9rem' }}>
//               <input
//                 type="checkbox"
//                 checked={showTodayOnly}
//                 onChange={() => setShowTodayOnly(!showTodayOnly)}
//                 style={{ marginRight: '0.5rem' }}
//               />
//               Show only today's tasks
//             </label>
//           </div>
//           <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
//             {filteredIssues.length > 0 ? (
//               filteredIssues.map(i => (
//                 <li key={i.id} style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>
//                   <strong>{i.title}</strong><br />
//                   <span style={statusStyle(i.status)}>{i.status}</span>
//                   <span style={{ fontSize: '0.8rem', color: '#666' }}> Due: {i.dueDate}</span>
//                 </li>
//               ))
//             ) : (
//               <li style={{ color: '#999', fontStyle: 'italic' }}>No tasks found</li>
//             )}
//           </ul>
//         </div>
// {/* 
//         Notifications */}
//         {/* <div style={cardStyle}>
//           <h2>🔔 Notifications & Mentions</h2>
//           <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
//             {notifications.length > 0 ? (
//               notifications.map(n => (
//                 <li key={n.id} style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>
//                   {n.message}
//                 </li>
//               ))
//             ) : (
//               <li style={{ color: '#999', fontStyle: 'italic' }}>No new notifications</li>
//             )}
//           </ul>
//         </div> */}

//         {/* Recently Viewed */}
//         <div style={cardStyle}>
//           <h2>🕵️ Recently Viewed</h2>
//           <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Feature coming soon</p>
//         </div>

//         {/* Quick Actions */}
//         <div style={cardStyle}>
//           <h2>⚡ Quick Actions</h2>
//           <div style={{ display: 'flex', flexDirection: 'column', marginTop: '1rem' }}>
//             <button style={btnStyle} onClick={() => navigate('/issues/new')}>
//               ➕ Create Issue
//             </button>
//             <button style={{ ...btnStyle, backgroundColor: '#10b981' }} onClick={() => navigate('/projects')}>
//               📁 Create Project
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


//today working

import React, { useEffect, useState } from 'react';
import { getCurrentUser, listIssues, listNotifs } from '../../services/mockApi';
import { useNavigate } from 'react-router-dom';

export default function ForYou() {
  const navigate = useNavigate();
  const [user, setUser] = useState(getCurrentUser());
  const [issues, setIssues] = useState([]); // always an array
  const [notifications, setNotifications] = useState([]);
  const [showTodayOnly, setShowTodayOnly] = useState(false);

  useEffect(() => {
    listIssues().then((res) => {
      // Ensure issues is always an array
      if (Array.isArray(res)) {
        setIssues(res);
      } else if (res?.data && Array.isArray(res.data)) {
        setIssues(res.data);
      } else {
        setIssues([]); // fallback
      }
    });

    listNotifs().then((res) => {
      if (Array.isArray(res)) {
        setNotifications(res);
      } else if (res?.data && Array.isArray(res.data)) {
        setNotifications(res.data);
      } else {
        setNotifications([]);
      }
    });
  }, []);

  // Only filter if issues is an array
  const mine = Array.isArray(issues)
    ? issues.filter((i) => i.assignee === user?.id)
    : [];

  const today = new Date().toISOString().slice(0, 10);
  const thisWeek = new Date();
  thisWeek.setDate(thisWeek.getDate() + 7);
  const weekEnd = thisWeek.toISOString().slice(0, 10);

  const filteredIssues = mine.filter((i) => {
    if (!i.dueDate) return false;
    if (showTodayOnly) return i.dueDate === today;
    return i.dueDate >= today && i.dueDate <= weekEnd;
  });

  const containerStyle = { padding: '2rem', fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f4f6f8' };
  const headerStyle = { marginBottom: '2rem' };
  const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' };
  const cardStyle = { background: '#fff', borderRadius: '8px', padding: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' };
  const btnStyle = { backgroundColor: '#1976d2', color: 'white', padding: '0.6rem 1rem', borderRadius: '6px', textAlign: 'center', marginBottom: '0.5rem', cursor: 'pointer', border: 'none' };
  const statusStyle = (status) => ({
    fontSize: '0.85rem',
    padding: '0.2rem 0.5rem',
    borderRadius: '4px',
    marginRight: '0.5rem',
    backgroundColor: status === 'Open' ? '#e0f7fa' : '#fbe9e7',
    color: status === 'Open' ? '#00796b' : '#d84315',
  });

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1>👋 Welcome, {user?.name}</h1>
        <p>Here’s what’s happening this week</p>
      </div>

      <div style={gridStyle}>
        {/* Assigned Tasks */}
        <div style={cardStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2>🗂️ Your Boards</h2>
            <label style={{ fontSize: '0.9rem' }}>
              <input
                type="checkbox"
                checked={showTodayOnly}
                onChange={() => setShowTodayOnly(!showTodayOnly)}
                style={{ marginRight: '0.5rem' }}
              />
              Show only today's tasks
            </label>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
            {filteredIssues.length > 0 ? (
              filteredIssues.map((i) => (
                <li key={i.id} style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>
                  <strong>{i.title}</strong>
                  <br />
                  <span style={statusStyle(i.status)}>{i.status}</span>
                  <span style={{ fontSize: '0.8rem', color: '#666' }}> Due: {i.dueDate}</span>
                </li>
              ))
            ) : (
              <li style={{ color: '#999', fontStyle: 'italic' }}>No tasks found</li>
            )}
          </ul>
        </div>

        {/* Recently Viewed */}
        <div style={cardStyle}>
          <h2>🕵️ Recently Viewed</h2>
          <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Feature coming soon</p>
        </div>

        {/* Quick Actions */}
        <div style={cardStyle}>
          <h2>⚡ Quick Actions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '1rem' }}>
            {/* <button style={btnStyle} onClick={() => navigate('/issues/new')}> */}
              {/* ➕ Create Issue */}
            {/* </button> */}
            <button style={{ ...btnStyle, backgroundColor: '#10b981' }} onClick={() => navigate('/projects')}>
              📁 Create Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}






