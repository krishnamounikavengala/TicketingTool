// code ok 


// import React, { useEffect, useState } from 'react';
// import { getCurrentUser, listIssues, listNotifs } from '../../services/mockApi';
// import { useNavigate } from 'react-router-dom';

// export default function ForYou() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(getCurrentUser());
//   const [issues, setIssues] = useState([]); // always an array
//   const [notifications, setNotifications] = useState([]);
//   const [showTodayOnly, setShowTodayOnly] = useState(false);

//   useEffect(() => {
//     listIssues().then((res) => {
//       // Ensure issues is always an array
//       if (Array.isArray(res)) {
//         setIssues(res);
//       } else if (res?.data && Array.isArray(res.data)) {
//         setIssues(res.data);
//       } else {
//         setIssues([]); // fallback
//       }
//     });

//     listNotifs().then((res) => {
//       if (Array.isArray(res)) {
//         setNotifications(res);
//       } else if (res?.data && Array.isArray(res.data)) {
//         setNotifications(res.data);
//       } else {
//         setNotifications([]);
//       }
//     });
//   }, []);

//   // Only filter if issues is an array
//   const mine = Array.isArray(issues)
//     ? issues.filter((i) => i.assignee === user?.id)
//     : [];

//   const today = new Date().toISOString().slice(0, 10);
//   const thisWeek = new Date();
//   thisWeek.setDate(thisWeek.getDate() + 7);
//   const weekEnd = thisWeek.toISOString().slice(0, 10);

//   const filteredIssues = mine.filter((i) => {
//     if (!i.dueDate) return false;
//     if (showTodayOnly) return i.dueDate === today;
//     return i.dueDate >= today && i.dueDate <= weekEnd;
//   });

//   const containerStyle = { padding: '2rem', fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f4f6f8' };
//   const headerStyle = { marginBottom: '2rem' };
//   const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' };
//   const cardStyle = { background: '#fff', borderRadius: '8px', padding: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' };
//   const btnStyle = { backgroundColor: '#1976d2', color: 'white', padding: '0.6rem 1rem', borderRadius: '6px', textAlign: 'center', marginBottom: '0.5rem', cursor: 'pointer', border: 'none' };
//   const statusStyle = (status) => ({
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
//               filteredIssues.map((i) => (
//                 <li key={i.id} style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>
//                   <strong>{i.title}</strong>
//                   <br />
//                   <span style={statusStyle(i.status)}>{i.status}</span>
//                   <span style={{ fontSize: '0.8rem', color: '#666' }}> Due: {i.dueDate}</span>
//                 </li>
//               ))
//             ) : (
//               <li style={{ color: '#999', fontStyle: 'italic' }}>No tasks found</li>
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
//             {/* <button style={btnStyle} onClick={() => navigate('/issues/new')}> */}
//               {/* ➕ Create Issue */}
//             {/* </button> */}
//             <button style={{ ...btnStyle, backgroundColor: '#10b981' }} onClick={() => navigate('/projects')}>
//               📁 Create Project
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }










// ////////////////////////  for responsiveness  /////////////////////////////////


import React, { useEffect, useState } from 'react';
import { getCurrentUser, listIssues, listNotifs } from '../../services/mockApi';
import { useNavigate } from 'react-router-dom';

export default function ForYou() {
  const navigate = useNavigate();
  const [user, setUser] = useState(getCurrentUser());
  const [issues, setIssues] = useState([]); // always an array
  const [notifications, setNotifications] = useState([]);
  const [showTodayOnly, setShowTodayOnly] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const containerStyle = { padding: isMobile ? '1rem' : '2rem', fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f4f6f8' };
  const headerStyle = { marginBottom: isMobile ? '1rem' : '2rem' };
  const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: isMobile ? '1rem' : '1.5rem' };
  const cardStyle = { background: '#fff', borderRadius: '8px', padding: isMobile ? '1rem' : '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' };
  const btnStyle = { backgroundColor: '#1976d2', color: 'white', padding: isMobile ? '0.5rem 0.8rem' : '0.6rem 1rem', borderRadius: '6px', textAlign: 'center', marginBottom: '0.5rem', cursor: 'pointer', border: 'none' };
  const statusStyle = (status) => ({
    fontSize: isMobile ? '0.75rem' : '0.85rem',
    padding: '0.2rem 0.5rem',
    borderRadius: '4px',
    marginRight: '0.5rem',
    backgroundColor: status === 'Open' ? '#e0f7fa' : '#fbe9e7',
    color: status === 'Open' ? '#00796b' : '#d84315',
  });

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={{ fontSize: isMobile ? '1.5rem' : '2rem' }}>👋 Welcome, {user?.name}</h1>
        <p style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>Here’s what’s happening this week</p>
      </div>

      <div style={gridStyle}>
        {/* Assigned Tasks */}
        <div style={cardStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: isMobile ? 'column' : 'row' }}>
            <h2 style={{ fontSize: isMobile ? '1.2rem' : '1.5rem' }}>🗂️ Your Boards</h2>
            <label style={{ fontSize: isMobile ? '0.8rem' : '0.9rem' }}>
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
                <li key={i.id} style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee', fontSize: isMobile ? '0.9rem' : '1rem' }}>
                  <strong>{i.title}</strong>
                  <br />
                  <span style={statusStyle(i.status)}>{i.status}</span>
                  <span style={{ fontSize: isMobile ? '0.7rem' : '0.8rem', color: '#666' }}> Due: {i.dueDate}</span>
                </li>
              ))
            ) : (
              <li style={{ color: '#999', fontStyle: 'italic', fontSize: isMobile ? '0.9rem' : '1rem' }}>No tasks found</li>
            )}
          </ul>
        </div>

        {/* Recently Viewed */}
        <div style={cardStyle}>
          <h2 style={{ fontSize: isMobile ? '1.2rem' : '1.5rem' }}>🕵️ Recently Viewed</h2>
          <p style={{ color: '#aaa', fontSize: isMobile ? '0.8rem' : '0.9rem' }}>Feature coming soon</p>
        </div>

        {/* Quick Actions */}
        <div style={cardStyle}>
          <h2 style={{ fontSize: isMobile ? '1.2rem' : '1.5rem' }}>⚡ Quick Actions</h2>
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














// /////////////////////////////////   for responsiveness //////////////////////////////////////