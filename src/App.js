


// this cod eis ok. 


// import React, { useState, useEffect } from 'react';
// import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
// import { AuthProvider, useAuth } from './context/AuthContext';
// import { ProjectProvider, useProjects } from './context/ProjectContext';
 
// import Login from './components/auth/Login';
// import Users from './components/users/Users';
// import ProjectList from './components/projects/ProjectList';
// import ProjectView from './components/projects/ProjectView';
// import KanbanBoard from './components/boards/KanbanBoard';
// import Backlog from './components/backlog/Backlog';
// import IssueDetails from './components/issues/IssueDetails';
// import IssueCreate from './components/issues/IssueCreate';
// import Assets from './components/assets/Assets';
// import Timeline from './components/timeline/Timeline';
// import ForYou from './components/dashboard/ForYou';
// import Notifications from './components/notifications/Notifications';
// import { FiMenu } from 'react-icons/fi';
 
// // PrivateRoute: Only allows authenticated users
// function PrivateRoute({ children }) {
//   const { user } = useAuth();
//   return user ? children : <Navigate to="/login" replace />;
// }
 
// export default function App() {
//   return (
//     <AuthProvider>
//       <ProjectProvider>
//         <Routes>
//           <Route path="/" element={<AuthLanding />} />
//           <Route path="/login" element={<LoginRedirectAfterAuth />} />
//           <Route path="/*" element={
//             <PrivateRoute>
//               <Layout />
//             </PrivateRoute>
//           } />
//         </Routes>
//       </ProjectProvider>
//     </AuthProvider>
//   );
// }
 
// function AuthLanding() {
//   const { user } = useAuth();
//   if (!user) {
//     return <Navigate to="/login" replace />;
//   } else {
//     return <Navigate to="/for-you" replace />;
//   }
// }
 
// function LoginRedirectAfterAuth() {
//   const { user } = useAuth();
//   const navigate = useNavigate();
 
//   useEffect(() => {
//     if (user) {
//       navigate("/for-you", { replace: true });
//     }
//   }, [user, navigate]);
 
//   return <Login />;
// }
 
// function Layout() {
//   const { user, logout } = useAuth();
//   const { projects } = useProjects();
 
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [currentProjectName, setCurrentProjectName] = useState(null);
 
//   useEffect(() => {
//     if (projects.length > 0) {
//       setCurrentProjectName(projects[0].name);
//     } else {
//       setCurrentProjectName(null);
//     }
//   }, [projects]);
 
//   const toggleSidebar = () => setSidebarOpen(prev => !prev);
 
//   const sidebarStyle = {
//     width: sidebarOpen ? '240px' : '70px',
//     transition: 'width 0.3s ease',
//     backgroundColor: '#111827',
//     color: '#fff',
//     height: '100vh',
//     padding: '16px 12px',
//     boxSizing: 'border-box',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     boxShadow: '2px 0 8px rgba(0,0,0,0.1)'
//   };
 
//   const navLinkStyle = {
//     display: 'block',
//     padding: sidebarOpen ? '10px 16px' : '10px 0',
//     color: '#e5e7eb',
//     textDecoration: 'none',
//     fontSize: '15px',
//     margin: '6px 0',
//     borderRadius: '6px',
//     backgroundColor: '#1f2937',
//     transition: 'all 0.2s ease',
//     fontWeight: '500',
//     textAlign: sidebarOpen ? 'left' : 'center'
//   };
 
//   const navLinkActiveStyle = {
//     backgroundColor: '#ffffff',
//     color: '#374151'
//   };
 
//   const contentStyle = {
//     flex: 1,
//     padding: '24px',
//     backgroundColor: '#f9fafb',
//     height: '100vh',
//     overflowY: 'auto'
//   };
 
//   const topbarStyle = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#ffffff',
//     padding: '16px 24px',
//     borderBottom: '1px solid #e5e7eb',
//     boxShadow: '0 1px 4px rgba(0,0,0,0.05)'
//   };
 
//   const appShellStyle = {
//     display: 'flex',
//     fontFamily: 'Segoe UI, Roboto, sans-serif',
//     fontSize: '14px',
//     color: '#111827'
//   };
 
//   const menuButtonStyle = {
//     background: 'none',
//     border: 'none',
//     color: '#e5e7eb',
//     cursor: 'pointer',
//     marginRight: '8px',
//     padding: '4px'
//   };
 
//   const userInfoStyle = {
//     fontSize: '17px',
//     lineHeight: '1.5',
//     padding: '12px',
//     backgroundColor: '#1f2937',
//     borderRadius: '6px',
//     marginTop: '12px'
//   };
 
//   const btnLinkStyle = {
//     background: 'none',
//     border: 'none',
//     color: '#3b82f6',
//     cursor: 'pointer',
//     padding: '0',
//     marginTop: '8px',
//     fontSize: '13px'
//   };
 
//   const navItems = [
//     { path: '/for-you', label: 'For You' },
//     { path: '/projects', label: 'Projects' },
//     { path: currentProjectName ? `/kanban/${currentProjectName}` : '/kanban/:name', label: 'Boards' },
//     { path: '/assets', label: 'Assets' },
//     { path: '/timeline', label: 'Timeline' },
//     { path: '/users', label: 'Users' },
//   ];
 
//   return (
//     <div style={appShellStyle} role="application" aria-label="Ticketing application">
//       <aside style={sidebarStyle} aria-label="Sidebar navigation">
//         <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
//           <button style={menuButtonStyle} onClick={toggleSidebar} aria-label="Toggle sidebar">
//             <FiMenu size={20} />
//           </button>
//           {sidebarOpen && <span style={{ fontWeight: 'bold' }}>Flow Track</span>}
//         </div>
//         <nav role="navigation" aria-label="Main">
//           {navItems.map(({ path, label }) => (
//             <NavLink
//               key={path}
//               to={path}
//               style={({ isActive }) =>
//                 isActive
//                   ? { ...navLinkStyle, ...navLinkActiveStyle }
//                   : navLinkStyle
//               }
//               end
//             >
//               {sidebarOpen ? label : label.charAt(0)}
//             </NavLink>
//           ))}
//         </nav>
//         <div>
//           {user ? (
//             <div style={userInfoStyle} aria-label="User Profile">
//               <div><strong>{user.name}</strong></div>
//               <div>{user.email}</div>
//               <button style={btnLinkStyle} onClick={logout}>Sign out</button>
//             </div>
//           ) : (
//             <NavLink to="/login" style={navLinkStyle}>Sign in</NavLink>
//           )}
//         </div>
//       </aside>
//       <div style={contentStyle}>
//         <header style={topbarStyle} role="banner">
//           <div>
//             <h1 style={{ margin: 0, fontSize: '20px' }}>Flow Track</h1>
//           </div>
//           <div style={{ fontSize: '12px', color: '#666' }}>Accessible demo • keyboard friendly</div>
//         </header>
//         <main id="main" tabIndex="-1" role="main">
//           <Routes>
//             <Route path="/projects" element={<ProjectList />} />
//             <Route path="/projects/:id" element={<ProjectView />} />
//             <Route path="/kanban/:name" element={<KanbanBoard />} />
//             <Route path="/backlog/:id" element={<Backlog />} />
//             <Route path="/issues/new" element={<IssueCreate />} />
//             <Route path="/issues/:id" element={<IssueDetails />} />
//             <Route path="/assets" element={<Assets />} />
//             <Route path="/timeline" element={<Timeline />} />
//             <Route path="/users" element={<Users />} />
//             <Route path="/notifications" element={<Notifications />} />
//             <Route path="/for-you" element={<ForYou />} />
//             <Route path="*" element={<Navigate to="/for-you" replace />} />
//           </Routes>
//         </main>
//       </div>
//     </div>
//   );
// }









///////////////////////////////////// for responsiveness //////////////////////////////////////////////////


import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ProjectProvider, useProjects } from './context/ProjectContext';
import Login from './components/auth/Login';
import Users from './components/users/Users';
import ProjectList from './components/projects/ProjectList';
import ProjectView from './components/projects/ProjectView';
import KanbanBoard from './components/boards/KanbanBoard';
import Backlog from './components/backlog/Backlog';
import IssueDetails from './components/issues/IssueDetails';
import IssueCreate from './components/issues/IssueCreate';
import Assets from './components/assets/Assets';
import Timeline from './components/timeline/Timeline';
import ForYou from './components/dashboard/ForYou';
import Notifications from './components/notifications/Notifications';
import { FiMenu } from 'react-icons/fi';
// PrivateRoute: Only allows authenticated users
function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
}
export default function App() {
  return (
    <AuthProvider>
      <ProjectProvider>
        <Routes>
          <Route path="/" element={<AuthLanding />} />
          <Route path="/login" element={<LoginRedirectAfterAuth />} />
          <Route path="/*" element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          } />
        </Routes>
      </ProjectProvider>
    </AuthProvider>
  );
}
function AuthLanding() {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  } else {
    return <Navigate to="/for-you" replace />;
  }
}
function LoginRedirectAfterAuth() {
  const { user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/for-you", { replace: true });
    }
  }, [user, navigate]);
  return <Login />;
}
function Layout() {
  const { user, logout } = useAuth();
  const { projects } = useProjects();
  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    const updateDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    updateDesktop();
    window.addEventListener('resize', updateDesktop);
    return () => window.removeEventListener('resize', updateDesktop);
  }, []);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  useEffect(() => {
    setSidebarOpen(window.innerWidth >= 768);
  }, []);
  const [currentProjectName, setCurrentProjectName] = useState(null);
  useEffect(() => {
    if (projects.length > 0) {
      setCurrentProjectName(projects[0].name);
    } else {
      setCurrentProjectName(null);
    }
  }, [projects]);
  const toggleSidebar = () => setSidebarOpen(prev => !prev);
  const sidebarStyle = {
    width: sidebarOpen ? '240px' : '70px',
    transition: 'width 0.3s ease',
    backgroundColor: '#111827',
    color: '#fff',
    height: '100vh',
    padding: isDesktop ? '16px 12px' : '12px 8px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '2px 0 8px rgba(0,0,0,0.1)'
  };
  const navLinkStyle = {
    display: 'block',
    padding: sidebarOpen ? (isDesktop ? '10px 16px' : '8px 12px') : '10px 0',
    color: '#e5e7eb',
    textDecoration: 'none',
    fontSize: isDesktop ? '15px' : '14px',
    margin: isDesktop ? '6px 0' : '4px 0',
    borderRadius: '6px',
    backgroundColor: '#1f2937',
    transition: 'all 0.2s ease',
    fontWeight: '500',
    textAlign: sidebarOpen ? 'left' : 'center'
  };
  const navLinkActiveStyle = {
    backgroundColor: '#ffffff',
    color: '#374151'
  };
  const contentStyle = {
    flex: 1,
    padding: isDesktop ? '24px' : '16px',
    backgroundColor: '#f9fafb',
    height: '100vh',
    overflowY: 'auto'
  };
  const topbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: isDesktop ? '16px 24px' : '12px 16px',
    borderBottom: '1px solid #e5e7eb',
    boxShadow: '0 1px 4px rgba(0,0,0,0.05)'
  };
  const appShellStyle = {
    display: 'flex',
    fontFamily: 'Segoe UI, Roboto, sans-serif',
    fontSize: '14px',
    color: '#111827'
  };
  const menuButtonStyle = {
    background: 'none',
    border: 'none',
    color: '#e5e7eb',
    cursor: 'pointer',
    marginRight: '8px',
    padding: '4px'
  };
  const userInfoStyle = {
    fontSize: isDesktop ? '17px' : '15px',
    lineHeight: '1.5',
    padding: isDesktop ? '12px' : '10px',
    backgroundColor: '#1f2937',
    borderRadius: '6px',
    marginTop: isDesktop ? '12px' : '8px'
  };
  const btnLinkStyle = {
    background: 'none',
    border: 'none',
    color: '#3b82f6',
    cursor: 'pointer',
    padding: '0',
    marginTop: '8px',
    fontSize: isDesktop ? '13px' : '12px'
  };
  const navItems = [
    { path: '/for-you', label: 'For You' },
    { path: '/projects', label: 'Projects' },
    { path: currentProjectName ? `/kanban/${currentProjectName}` : '/kanban/:name', label: 'Boards' },
    { path: '/assets', label: 'Assets' },
    { path: '/timeline', label: 'Timeline' },
    { path: '/users', label: 'Users' },
  ];
  return (
    <div style={appShellStyle} role="application" aria-label="Ticketing application">
      <aside style={sidebarStyle} aria-label="Sidebar navigation">
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <button style={menuButtonStyle} onClick={toggleSidebar} aria-label="Toggle sidebar">
            <FiMenu size={20} />
          </button>
          {sidebarOpen && <span style={{ fontWeight: 'bold' }}>Flow Track</span>}
        </div>
        <nav role="navigation" aria-label="Main">
          {navItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              style={({ isActive }) =>
                isActive
                  ? { ...navLinkStyle, ...navLinkActiveStyle }
                  : navLinkStyle
              }
              end
            >
              {sidebarOpen ? label : label.charAt(0)}
            </NavLink>
          ))}
        </nav>
        <div>
          {user ? (
            <div style={userInfoStyle} aria-label="User Profile">
              <div><strong>{user.name}</strong></div>
              <div>{user.email}</div>
              <button style={btnLinkStyle} onClick={logout}>Sign out</button>
            </div>
          ) : (
            <NavLink to="/login" style={navLinkStyle}>Sign in</NavLink>
          )}
        </div>
      </aside>
      <div style={contentStyle}>
        <header style={topbarStyle} role="banner">
          <div>
            <h1 style={{ margin: 0, fontSize: isDesktop ? '20px' : '18px' }}>Flow Track</h1>
          </div>
          <div style={{ fontSize: isDesktop ? '12px' : '11px', color: '#666' }}>Accessible demo • keyboard friendly</div>
        </header>
        <main id="main" tabIndex="-1" role="main">
          <Routes>
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/projects/:id" element={<ProjectView />} />
            <Route path="/kanban/:name" element={<KanbanBoard />} />
            <Route path="/backlog/:id" element={<Backlog />} />
            <Route path="/issues/new" element={<IssueCreate />} />
            <Route path="/issues/:id" element={<IssueDetails />} />
            <Route path="/assets" element={<Assets />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/users" element={<Users />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/for-you" element={<ForYou />} />
            <Route path="*" element={<Navigate to="/for-you" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}