

// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { getProject, listIssues } from '../../services/mockApi';

// export default function ProjectView() {
//   const { id } = useParams();
//   const [project, setProject] = useState(null);
//   const [issues, setIssues] = useState([]);

//   useEffect(() => {
//     if (id) {
//       getProject(id).then(setProject);
//       // Fetch only issues belonging to this project
//       listIssues(id).then(setIssues);
//     }
//   }, [id]);

//   if (!project)
//     return (
//       <div className="card">
//         <p>Project not found</p>
//       </div>
//     );

//   return (
//     <div className="card" role="region" aria-labelledby="proj-title">
//       <h2 id="proj-title">
//         {project.name} <span className="small">({project.key})</span>
//       </h2>
//       <p>{project.description}</p>
//       <div style={{ display: 'flex', gap: 8 }}>
//         {/* Each project has its own board */}
//         <Link to={`/kanban/${project.id}`} className="btn">
//           Open {project.name} Board
//         </Link>
//       </div>
//       <hr />
//       <h3>Issues</h3>
//       <ul>
//         {issues.length > 0 ? (
//           issues.map((i) => (
//             <li key={i.id}>
//               <Link to={'/issues/' + i.id}>{i.title}</Link> — <em>{i.status}</em>
//             </li>
//           ))
//         ) : (
//           <li>No issues for this project yet.</li>
//         )}
//       </ul>
//     </div>
//   );
// }















////////////////////////////////  for responsivenesss ////////////////////////////// 



import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProject, listIssues } from '../../services/mockApi';

export default function ProjectView() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    if (id) {
      getProject(id).then(setProject);
      // Fetch only issues belonging to this project
      listIssues(id).then(setIssues);
    }
  }, [id]);

  if (!project)
    return (
      <div className="card">
        <p>Project not found</p>
      </div>
    );

  return (
    <div className="card" role="region" aria-labelledby="proj-title" style={{ padding: '1rem', maxWidth: '100%', boxSizing: 'border-box' }}>
      <h2 id="proj-title" style={{ margin: '0 0 0.5rem 0', fontSize: '1.5rem' }}>
        {project.name} <span className="small" style={{ fontSize: '0.875rem', opacity: 0.7 }}>({project.key})</span>
      </h2>
      <p style={{ margin: '0 0 1rem 0', lineHeight: 1.5 }}>{project.description}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: '1rem' }}>
        {/* Each project has its own board */}
        <Link 
          to={`/kanban/${project.id}`} 
          className="btn"
          style={{ 
            flex: '1 1 100%', 
            minWidth: '200px',
            textAlign: 'center',
            padding: '0.5rem 1rem',
            textDecoration: 'none',
            display: 'inline-block',
            boxSizing: 'border-box'
          }}
        >
          Open {project.name} Board
        </Link>
      </div>
      <hr style={{ margin: '1rem 0' }} />
      <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem' }}>Issues</h3>
      <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
        {issues.length > 0 ? (
          issues.map((i) => (
            <li key={i.id} style={{ marginBottom: '0.5rem', padding: '0.25rem 0', borderBottom: '1px solid #eee' }}>
              <Link 
                to={'/issues/' + i.id} 
                style={{ 
                  textDecoration: 'none', 
                  color: 'inherit',
                  display: 'block',
                  marginBottom: '0.25rem',
                  wordBreak: 'break-word'
                }}
              >
                {i.title}
              </Link>
              <em style={{ color: '#666', fontSize: '0.875rem' }}>{i.status}</em>
            </li>
          ))
        ) : (
          <li style={{ color: '#666', fontStyle: 'italic' }}>No issues for this project yet.</li>
        )}
      </ul>
    </div>
  );
}