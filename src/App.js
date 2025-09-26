
// // // import React from 'react';
// // // import { Routes, Route, Link, Navigate } from 'react-router-dom';
// // // import { AuthProvider, useAuth } from './context/AuthContext';

// // // import Login from './components/auth/Login';
// // // import Users from './components/users/Users';
// // // import ProjectList from './components/projects/ProjectList';
// // // import ProjectView from './components/projects/ProjectView';
// // // import KanbanBoard from './components/boards/KanbanBoard';
// // // import Backlog from './components/backlog/Backlog';
// // // import IssueDetails from './components/issues/IssueDetails';
// // // import IssueCreate from './components/issues/IssueCreate';
// // // import Assets from './components/assets/Assets';
// // // import Timeline from './components/timeline/Timeline';
// // // import ForYou from './components/dashboard/ForYou';
// // // import Notifications from './components/notifications/Notifications';
// // // import { FiMenu } from 'react-icons/fi';

// // // function PrivateRoute({ children }) {
// // //   const { user } = useAuth();
// // //   return user ? children : <Navigate to="/login" replace />;
// // // }

// // // export default function App() {
// // //   return (
// // //     <AuthProvider>
// // //       <Layout />
// // //     </AuthProvider>
// // //   );
// // // }

// // // function Layout() {
// // //   const { user, logout } = useAuth();

// // //   return (
// // //     <div className="app-shell" role="application" aria-label="Ticketing application">
// // //       <aside className="sidebar" aria-label="Sidebar navigation">
// // //         <div className="sidebar-brand" aria-hidden="true">
// // //           <FiMenu size={20} /> <span>Ticketing</span>
// // //         </div>
// // //         <nav className="sidebar-nav" role="navigation" aria-label="Main">
// // //           <Link to="/for-you" className="nav-link">For You</Link>
// // //           <Link to="/projects" className="nav-link">Projects</Link>
// // //           <Link to="/kanban" className="nav-link">Boards</Link>
// // //           <Link to="/backlog" className="nav-link">Backlog</Link>
// // //           <Link to="/issues/new" className="nav-link">Create Issue</Link>
// // //           <Link to="/assets" className="nav-link">Assets</Link>
// // //           <Link to="/timeline" className="nav-link">Timeline</Link>
// // //           <Link to="/users" className="nav-link">Users</Link>
// // //           <Link to="/notifications" className="nav-link">Notifications</Link>
// // //         </nav>
// // //         <div className="sidebar-footer">
// // //           {user ? (
// // //             <div className="user-info" aria-label="User Profile">
// // //               <div><strong>{user.name}</strong></div>
// // //               <div className="small">{user.email}</div>
// // //               <button className="btn-link" onClick={logout}>Sign out</button>
// // //             </div>
// // //           ) : <Link to="/login" className="nav-link">Sign in</Link>}
// // //         </div>
// // //       </aside>

// // //       <div className="content">
// // //         <header className="topbar" role="banner">
// // //           <div className="topbar-left"><h1 className="app-title">Ticketing — Jira-like</h1></div>
// // //           <div className="topbar-right small">Accessible demo • keyboard friendly</div>
// // //         </header>

// // //         <main id="main" tabIndex="-1" className="main" role="main">
// // //           <Routes>
// // //             <Route path="/login" element={<Login />} />
// // //             <Route path="/projects" element={<PrivateRoute><ProjectList /></PrivateRoute>} />
// // //             <Route path="/projects/:id" element={<PrivateRoute><ProjectView /></PrivateRoute>} />
// // //             <Route path="/kanban/:projectId?" element={<PrivateRoute><KanbanBoard /></PrivateRoute>} />
// // //             <Route path="/backlog/:projectId?" element={<PrivateRoute><Backlog /></PrivateRoute>} />
// // //             <Route path="/issues/new" element={<PrivateRoute><IssueCreate /></PrivateRoute>} />
// // //             <Route path="/issues/:id" element={<PrivateRoute><IssueDetails /></PrivateRoute>} />
// // //             <Route path="/assets" element={<PrivateRoute><Assets /></PrivateRoute>} />
// // //             <Route path="/timeline" element={<PrivateRoute><Timeline /></PrivateRoute>} />
// // //             <Route path="/users" element={<PrivateRoute><Users /></PrivateRoute>} />
// // //             <Route path="/notifications" element={<PrivateRoute><Notifications /></PrivateRoute>} />
// // //             <Route path="/for-you" element={<PrivateRoute><ForYou /></PrivateRoute>} />
// // //             <Route path="/" element={<Navigate to="/for-you" replace />} />
// // //           </Routes>
// // //         </main>
// // //       </div>
// // //     </div>
// // //   );
// // // }



// // import React from 'react';
// // import { Routes, Route, Link, Navigate } from 'react-router-dom';
// // import { AuthProvider, useAuth } from './context/AuthContext';
// // import { ProjectProvider } from './context/ProjectContext'; // ✅ Correct path

// // import Login from './components/auth/Login';
// // import Users from './components/users/Users';
// // import ProjectList from './components/projects/ProjectList';
// // import ProjectView from './components/projects/ProjectView';
// // import KanbanBoard from './components/boards/KanbanBoard';
// // import Backlog from './components/backlog/Backlog';
// // import IssueDetails from './components/issues/IssueDetails';
// // import IssueCreate from './components/issues/IssueCreate';
// // import Assets from './components/assets/Assets';
// // import Timeline from './components/timeline/Timeline';
// // import ForYou from './components/dashboard/ForYou';
// // import Notifications from './components/notifications/Notifications';
// // import { FiMenu } from 'react-icons/fi';

// // function PrivateRoute({ children }) {
// //   const { user } = useAuth();
// //   return user ? children : <Navigate to="/login" replace />;
// // }

// // export default function App() {
// //   return (
// //     <AuthProvider>
// //       <ProjectProvider>
// //         <Layout />
// //       </ProjectProvider>
// //     </AuthProvider>
// //   );
// // }

// // function Layout() {
// //   const { user, logout } = useAuth();

// //   return (
// //     <div className="app-shell" role="application" aria-label="Ticketing application">
// //       <aside className="sidebar" aria-label="Sidebar navigation">
// //         <div className="sidebar-brand" aria-hidden="true">
// //           <FiMenu size={20} /> <span>Flow Track</span>
// //         </div>
// //         <nav className="sidebar-nav" role="navigation" aria-label="Main">
// //           <Link to="/for-you" className="nav-link">For You</Link>
// //           <Link to="/projects" className="nav-link">Projects</Link>
// //           <Link to="/kanban" className="nav-link">Boards</Link>
// //           <Link to="/backlog" className="nav-link">Backlog</Link>
// //           <Link to="/issues/new" className="nav-link">Create Issue</Link>
// //           <Link to="/assets" className="nav-link">Assets</Link>
// //           <Link to="/timeline" className="nav-link">Timeline</Link>
// //           <Link to="/users" className="nav-link">Users</Link>
// //           <Link to="/notifications" className="nav-link">Notifications</Link>
// //         </nav>
// //         <div className="sidebar-footer">
// //           {user ? (
// //             <div className="user-info" aria-label="User Profile">
// //               <div><strong>{user.name}</strong></div>
// //               <div className="small">{user.email}</div>
// //               <button className="btn-link" onClick={logout}>Sign out</button>
// //             </div>
// //           ) : (
// //             <Link to="/login" className="nav-link">Sign in</Link>
// //           )}
// //         </div>
// //       </aside>

// //       <div className="content">
// //         <header className="topbar" role="banner">
// //           <div className="topbar-left">
// //             <h1 className="app-title">Flow Track</h1>
// //           </div>
// //           <div className="topbar-right small">Accessible demo • keyboard friendly</div>
// //         </header>

// //         <main id="main" tabIndex="-1" className="main" role="main">
// //           <Routes>
// //             <Route path="/login" element={<Login />} />
// //             <Route path="/projects" element={<PrivateRoute><ProjectList /></PrivateRoute>} />
// //             <Route path="/projects/:id" element={<PrivateRoute><ProjectView /></PrivateRoute>} />
// //             <Route path="/kanban/:projectId?" element={<PrivateRoute><KanbanBoard /></PrivateRoute>} />
// //             <Route path="/backlog/:projectId?" element={<PrivateRoute><Backlog /></PrivateRoute>} />
// //             <Route path="/issues/new" element={<PrivateRoute><IssueCreate /></PrivateRoute>} />
// //             <Route path="/issues/:id" element={<PrivateRoute><IssueDetails /></PrivateRoute>} />
// //             <Route path="/assets" element={<PrivateRoute><Assets /></PrivateRoute>} />
// //             <Route path="/timeline" element={<PrivateRoute><Timeline /></PrivateRoute>} />
// //             <Route path="/users" element={<PrivateRoute><Users /></PrivateRoute>} />
// //             <Route path="/notifications" element={<PrivateRoute><Notifications /></PrivateRoute>} />
// //             <Route path="/for-you" element={<PrivateRoute><ForYou /></PrivateRoute>} />
// //             <Route path="/" element={<Navigate to="/for-you" replace />} />
// //           </Routes>
// //         </main>
// //       </div>
// //     </div>
// //   );
// // }





// // import React, { useState } from 'react';
// // import { Routes, Route, Link, Navigate } from 'react-router-dom';
// // import { AuthProvider, useAuth } from './context/AuthContext';
// // import { ProjectProvider } from './context/ProjectContext';
 
// // import Login from './components/auth/Login';
// // import Users from './components/users/Users';
// // import ProjectList from './components/projects/ProjectList';
// // import ProjectView from './components/projects/ProjectView';
// // import KanbanBoard from './components/boards/KanbanBoard';
// // import Backlog from './components/backlog/Backlog';
// // import IssueDetails from './components/issues/IssueDetails';
// // import IssueCreate from './components/issues/IssueCreate';
// // import Assets from './components/assets/Assets';
// // import Timeline from './components/timeline/Timeline';
// // import ForYou from './components/dashboard/ForYou';
// // import Notifications from './components/notifications/Notifications';
// // import { FiMenu } from 'react-icons/fi';
 
// // function PrivateRoute({ children }) {
// //   const { user } = useAuth();
// //   return user ? children : <Navigate to="/login" replace />;
// // }
 
// // export default function App() {
// //   return (
// //     <AuthProvider>
// //       <ProjectProvider>
// //         <Layout />
// //       </ProjectProvider>
// //     </AuthProvider>
// //   );
// // }
 
// // function Layout() {
// //   const { user, logout } = useAuth();
// //   const [sidebarOpen, setSidebarOpen] = useState(true);
 
// //   const toggleSidebar = () => setSidebarOpen(prev => !prev);
 
// //   const sidebarStyle = {
// //     width: sidebarOpen ? '240px' : '70px',
// //     transition: 'width 0.3s ease',
// //     backgroundColor: '#111827',
// //     color: '#fff',
// //     height: '100vh',
// //     padding: '16px 12px',
// //     boxSizing: 'border-box',
// //     display: 'flex',
// //     flexDirection: 'column',
// //     justifyContent: 'space-between',
// //     boxShadow: '2px 0 8px rgba(0,0,0,0.1)'
// //   };
 
// //   const navLinkStyle = {
// //     display: 'block',
// //     padding: sidebarOpen ? '10px 16px' : '10px 0',
// //     color: '#e5e7eb',
// //     textDecoration: 'none',
// //     fontSize: '15px',
// //     margin: '6px 0',
// //     borderRadius: '6px',
// //     backgroundColor: '#1f2937',
// //     transition: 'all 0.2s ease',
// //     fontWeight: '500',
// //     textAlign: sidebarOpen ? 'left' : 'center'
// //   };
 
// //   const navLinkHoverStyle = {
// //     backgroundColor:'#ffffff',
// //     color: '#374151'
// //   };
 
// //   const contentStyle = {
// //     flex: 1,
// //     padding: '24px',
// //     backgroundColor: '#f9fafb',
// //     height: '100vh',
// //     overflowY: 'auto'
// //   };
 
// //   const topbarStyle = {
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     backgroundColor: '#ffffff',
// //     padding: '16px 24px',
// //     borderBottom: '1px solid #e5e7eb',
// //     boxShadow: '0 1px 4px rgba(0,0,0,0.05)'
// //   };
 
// //   const appShellStyle = {
// //     display: 'flex',
// //     fontFamily: 'Segoe UI, Roboto, sans-serif',
// //     fontSize: '14px',
// //     color: '#111827'
// //   };
 
// //   const menuButtonStyle = {
// //     background: 'none',
// //     border: 'none',
// //     color: '#e5e7eb',
// //     cursor: 'pointer',
// //     marginRight: '8px',
// //     padding: '4px'
// //   };
 
// //   const userInfoStyle = {
// //     fontSize: '17px',
// //     lineHeight: '1.5',
// //     padding: '12px',
// //     backgroundColor: '#1f2937',
// //     borderRadius: '6px',
// //     marginTop: '12px'
// //   };
 
// //   const btnLinkStyle = {
// //     background: 'none',
// //     border: 'none',
// //     color: '#3b82f6',
// //     cursor: 'pointer',
// //     padding: '0',
// //     marginTop: '8px',
// //     fontSize: '13px'
// //   };
 
// //   const navItems = [
// //     { path: '/for-you', label: 'For You' },
// //     { path: '/projects', label: 'Projects' },
// //     { path: '/kanban', label: 'Boards' },
// //     { path: '/backlog', label: 'Backlog' },
// //     { path: '/issues/new', label: 'Create Issue' },
// //     { path: '/assets', label: 'Assets' },
// //     { path: '/timeline', label: 'Timeline' },
// //     { path: '/users', label: 'Users' },
// //     { path: '/notifications', label: 'Notifications' }
// //   ];
 
// //   return (
// //     <div style={appShellStyle} role="application" aria-label="Ticketing application">
// //       <aside style={sidebarStyle} aria-label="Sidebar navigation">
// //         <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
// //           <button style={menuButtonStyle} onClick={toggleSidebar} aria-label="Toggle sidebar">
// //             <FiMenu size={20} />
// //           </button>
// //           {sidebarOpen && <span style={{ fontWeight: 'bold' }}>Flow Track</span>}
// //         </div>
 
// //         <nav role="navigation" aria-label="Main">
// //           {navItems.map(({ path, label }) => {
// //             const [isHovered, setIsHovered] = useState(false);
 
// //             const combinedStyle = {
// //               ...navLinkStyle,
// //               ...(isHovered ? navLinkHoverStyle : {})
// //             };
 
// //             return (
// //               <Link
// //                 key={path}
// //                 to={path}
// //                 style={combinedStyle}
// //                 onMouseEnter={() => setIsHovered(true)}
// //                 onMouseLeave={() => setIsHovered(false)}
// //               >
// //                 {sidebarOpen ? label : label.charAt(0)}
// //               </Link>
// //             );
// //           })}
// //         </nav>
 
// //         <div>
// //           {user ? (
// //             <div style={userInfoStyle} aria-label="User Profile">
// //               <div><strong>{user.name}</strong></div>
// //               <div>{user.email}</div>
// //               <button style={btnLinkStyle} onClick={logout}>Sign out</button>
// //             </div>
// //           ) : (
// //             <Link to="/login" style={navLinkStyle}>Sign in</Link>
// //           )}
// //         </div>
// //       </aside>
 
// //       <div style={contentStyle}>
// //         <header style={topbarStyle} role="banner">
// //           <div>
// //             <h1 style={{ margin: 0, fontSize: '20px' }}>Flow Track</h1>
// //           </div>
// //           <div style={{ fontSize: '12px', color: '#666' }}>Accessible demo • keyboard friendly</div>
// //         </header>
 
// //         <main id="main" tabIndex="-1" role="main">
// //           <Routes>
// //             <Route path="/login" element={<Login />} />
// //             <Route path="/projects" element={<PrivateRoute><ProjectList /></PrivateRoute>} />
// //             <Route path="/projects/:id" element={<PrivateRoute><ProjectView /></PrivateRoute>} />
// //             <Route path="/kanban/:projectId?" element={<PrivateRoute><KanbanBoard /></PrivateRoute>} />
// //             <Route path="/backlog/:projectId?" element={<PrivateRoute><Backlog /></PrivateRoute>} />
// //             <Route path="/issues/new" element={<PrivateRoute><IssueCreate /></PrivateRoute>} />
// //             <Route path="/issues/:id" element={<PrivateRoute><IssueDetails /></PrivateRoute>} />
// //             <Route path="/assets" element={<PrivateRoute><Assets /></PrivateRoute>} />
// //             <Route path="/timeline" element={<PrivateRoute><Timeline /></PrivateRoute>} />
// //             <Route path="/users" element={<PrivateRoute><Users /></PrivateRoute>} />
// //             <Route path="/notifications" element={<PrivateRoute><Notifications /></PrivateRoute>} />
// //             <Route path="/for-you" element={<PrivateRoute><ForYou /></PrivateRoute>} />
// //             <Route path="/" element={<Navigate to="/for-you" replace />} />
// //           </Routes>
// //         </main>
// //       </div>
// //     </div>
// //   );
// // }








// // import React, { useState } from 'react';
// // import { Routes, Route, Link, Navigate } from 'react-router-dom';
// // import { AuthProvider, useAuth } from './context/AuthContext';
// // import { ProjectProvider } from './context/ProjectContext';

// // import Login from './components/auth/Login';
// // import Users from './components/users/Users';
// // import ProjectList from './components/projects/ProjectList';
// // import ProjectView from './components/projects/ProjectView';
// // import KanbanBoard from './components/boards/KanbanBoard';
// // import Backlog from './components/backlog/Backlog';
// // import IssueDetails from './components/issues/IssueDetails';
// // import IssueCreate from './components/issues/IssueCreate';
// // import Assets from './components/assets/Assets';
// // import Timeline from './components/timeline/Timeline';
// // import ForYou from './components/dashboard/ForYou';
// // import Notifications from './components/notifications/Notifications';
// // import { FiMenu } from 'react-icons/fi';

// // function PrivateRoute({ children }) {
// //   const { user } = useAuth();
// //   return user ? children : <Navigate to="/login" replace />;
// // }

// // export default function App() {
// //   return (
// //     <AuthProvider>
// //       <ProjectProvider>
// //         <Layout />
// //       </ProjectProvider>
// //     </AuthProvider>
// //   );
// // }

// // function Layout() {
// //   const { user, logout } = useAuth();
// //   const [sidebarOpen, setSidebarOpen] = useState(true);
// //   const [hoveredPath, setHoveredPath] = useState(null);

// //   const toggleSidebar = () => setSidebarOpen(prev => !prev);

// //   const sidebarStyle = {
// //     width: sidebarOpen ? '240px' : '70px',
// //     transition: 'width 0.3s ease',
// //     backgroundColor: '#111827',
// //     color: '#fff',
// //     height: '100vh',
// //     padding: '16px 12px',
// //     boxSizing: 'border-box',
// //     display: 'flex',
// //     flexDirection: 'column',
// //     justifyContent: 'space-between',
// //     boxShadow: '2px 0 8px rgba(0,0,0,0.1)'
// //   };

// //   const navLinkStyle = {
// //     display: 'block',
// //     padding: sidebarOpen ? '10px 16px' : '10px 0',
// //     color: '#e5e7eb',
// //     textDecoration: 'none',
// //     fontSize: '15px',
// //     margin: '6px 0',
// //     borderRadius: '6px',
// //     backgroundColor: '#1f2937',
// //     transition: 'all 0.2s ease',
// //     fontWeight: '500',
// //     textAlign: sidebarOpen ? 'left' : 'center'
// //   };

// //   const navLinkHoverStyle = {
// //     backgroundColor: '#ffffff',
// //     color: '#374151'
// //   };

// //   const contentStyle = {
// //     flex: 1,
// //     padding: '24px',
// //     backgroundColor: '#f9fafb',
// //     height: '100vh',
// //     overflowY: 'auto'
// //   };

// //   const topbarStyle = {
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     backgroundColor: '#ffffff',
// //     padding: '16px 24px',
// //     borderBottom: '1px solid #e5e7eb',
// //     boxShadow: '0 1px 4px rgba(0,0,0,0.05)'
// //   };

// //   const appShellStyle = {
// //     display: 'flex',
// //     fontFamily: 'Segoe UI, Roboto, sans-serif',
// //     fontSize: '14px',
// //     color: '#111827'
// //   };

// //   const menuButtonStyle = {
// //     background: 'none',
// //     border: 'none',
// //     color: '#e5e7eb',
// //     cursor: 'pointer',
// //     marginRight: '8px',
// //     padding: '4px'
// //   };

// //   const userInfoStyle = {
// //     fontSize: '17px',
// //     lineHeight: '1.5',
// //     padding: '12px',
// //     backgroundColor: '#1f2937',
// //     borderRadius: '6px',
// //     marginTop: '12px'
// //   };

// //   const btnLinkStyle = {
// //     background: 'none',
// //     border: 'none',
// //     color: '#3b82f6',
// //     cursor: 'pointer',
// //     padding: '0',
// //     marginTop: '8px',
// //     fontSize: '13px'
// //   };

// //   const navItems = [
// //     { path: '/for-you', label: 'For You' },
// //     { path: '/projects', label: 'Projects' },
// //     { path: '/kanban', label: 'Boards' },
// //     { path: '/backlog', label: 'Backlog' },
// //     { path: '/issues/new', label: 'Create Issue' },
// //     { path: '/assets', label: 'Assets' },
// //     { path: '/timeline', label: 'Timeline' },
// //     { path: '/users', label: 'Users' },
// //     { path: '/notifications', label: 'Notifications' }
// //   ];

// //   return (
// //     <div style={appShellStyle} role="application" aria-label="Ticketing application">
// //       <aside style={sidebarStyle} aria-label="Sidebar navigation">
// //         <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
// //           <button style={menuButtonStyle} onClick={toggleSidebar} aria-label="Toggle sidebar">
// //             <FiMenu size={20} />
// //           </button>
// //           {sidebarOpen && <span style={{ fontWeight: 'bold' }}>Flow Track</span>}
// //         </div>

// //         <nav role="navigation" aria-label="Main">
// //           {navItems.map(({ path, label }) => {
// //             const combinedStyle = {
// //               ...navLinkStyle,
// //               ...(hoveredPath === path ? navLinkHoverStyle : {})
// //             };

// //             return (
// //               <Link
// //                 key={path}
// //                 to={path}
// //                 style={combinedStyle}
// //                 onMouseEnter={() => setHoveredPath(path)}
// //                 onMouseLeave={() => setHoveredPath(null)}
// //               >
// //                 {sidebarOpen ? label : label.charAt(0)}
// //               </Link>
// //             );
// //           })}
// //         </nav>

// //         <div>
// //           {user ? (
// //             <div style={userInfoStyle} aria-label="User Profile">
// //               <div><strong>{user.name}</strong></div>
// //               <div>{user.email}</div>
// //               <button style={btnLinkStyle} onClick={logout}>Sign out</button>
// //             </div>
// //           ) : (
// //             <Link to="/login" style={navLinkStyle}>Sign in</Link>
// //           )}
// //         </div>
// //       </aside>

// //       <div style={contentStyle}>
// //         <header style={topbarStyle} role="banner">
// //           <div>
// //             <h1 style={{ margin: 0, fontSize: '20px' }}>Flow Track</h1>
// //           </div>
// //           <div style={{ fontSize: '12px', color: '#666' }}>Accessible demo • keyboard friendly</div>
// //         </header>

// //         <main id="main" tabIndex="-1" role="main">
// //           <Routes>
// //             <Route path="/login" element={<Login />} />
// //             <Route path="/projects" element={<PrivateRoute><ProjectList /></PrivateRoute>} />
// //             <Route path="/projects/:id" element={<PrivateRoute><ProjectView /></PrivateRoute>} />
// //             <Route path="/kanban/:projectId?" element={<PrivateRoute><KanbanBoard /></PrivateRoute>} />
// //             <Route path="/backlog/:projectId?" element={<PrivateRoute><Backlog /></PrivateRoute>} />
// //             <Route path="/issues/new" element={<PrivateRoute><IssueCreate /></PrivateRoute>} />
// //             <Route path="/issues/:id" element={<PrivateRoute><IssueDetails /></PrivateRoute>} />
// //             <Route path="/assets" element={<PrivateRoute><Assets /></PrivateRoute>} />
// //             <Route path="/timeline" element={<PrivateRoute><Timeline /></PrivateRoute>} />
// //             <Route path="/users" element={<PrivateRoute><Users /></PrivateRoute>} />
// //             <Route path="/notifications" element={<PrivateRoute><Notifications /></PrivateRoute>} />
// //             <Route path="/for-you" element={<PrivateRoute><ForYou /></PrivateRoute>} />

// //             {/* ✅ Redirect root based on login */}
// //             <Route
// //               path="/"
// //               element={user ? <Navigate to="/for-you" replace /> : <Navigate to="/login" replace />}
// //             />
// //           </Routes>
// //         </main>
// //       </div>
// //     </div>
// //   );
// // }






// import React, { useState } from "react";
// import { Routes, Route, Link, Navigate } from "react-router-dom";
// import { AuthProvider, useAuth } from "./context/AuthContext";
// import { ProjectProvider } from "./context/ProjectContext";

// import Login from "./components/auth/Login";
// import Users from "./components/users/Users";
// import ProjectList from "./components/projects/ProjectList";
// import ProjectView from "./components/projects/ProjectView";
// import KanbanBoard from "./components/boards/KanbanBoard";
// import Backlog from "./components/backlog/Backlog";
// import IssueDetails from "./components/issues/IssueDetails";
// import IssueCreate from "./components/issues/IssueCreate";
// import Assets from "./components/assets/Assets";
// import Timeline from "./components/timeline/Timeline";
// import ForYou from "./components/dashboard/ForYou";
// import Notifications from "./components/notifications/Notifications";
// import { FiMenu } from "react-icons/fi";

// function PrivateRoute({ children }) {
//   const { user } = useAuth();
//   return user ? children : <Navigate to="/login" replace />;
// }

// export default function App() {
//   return (
//     <AuthProvider>
//       <ProjectProvider>
//         <Routes>
//           {/* 👇 Login route outside layout */}
//           <Route path="/login" element={<Login />} />

//           {/* 👇 All other routes use Layout */}
//           <Route path="/*" element={<Layout />} />
//         </Routes>
//       </ProjectProvider>
//     </AuthProvider>
//   );
// }

// function Layout() {
//   const { user, logout } = useAuth();
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [hoveredPath, setHoveredPath] = useState(null);

//   const toggleSidebar = () => setSidebarOpen((prev) => !prev);

//   const sidebarStyle = {
//     width: sidebarOpen ? "240px" : "70px",
//     transition: "width 0.3s ease",
//     backgroundColor: "#111827",
//     color: "#fff",
//     height: "100vh",
//     padding: "16px 12px",
//     boxSizing: "border-box",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//     boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
//   };

//   const navLinkStyle = {
//     display: "block",
//     padding: sidebarOpen ? "10px 16px" : "10px 0",
//     color: "#e5e7eb",
//     textDecoration: "none",
//     fontSize: "15px",
//     margin: "6px 0",
//     borderRadius: "6px",
//     backgroundColor: "#1f2937",
//     transition: "all 0.2s ease",
//     fontWeight: "500",
//     textAlign: sidebarOpen ? "left" : "center",
//   };

//   const navLinkHoverStyle = {
//     backgroundColor: "#ffffff",
//     color: "#374151",
//   };

//   const contentStyle = {
//     flex: 1,
//     padding: "24px",
//     backgroundColor: "#f9fafb",
//     height: "100vh",
//     overflowY: "auto",
//   };

//   const topbarStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     backgroundColor: "#ffffff",
//     padding: "16px 24px",
//     borderBottom: "1px solid #e5e7eb",
//     boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
//   };

//   const appShellStyle = {
//     display: "flex",
//     fontFamily: "Segoe UI, Roboto, sans-serif",
//     fontSize: "14px",
//     color: "#111827",
//   };

//   const menuButtonStyle = {
//     background: "none",
//     border: "none",
//     color: "#e5e7eb",
//     cursor: "pointer",
//     marginRight: "8px",
//     padding: "4px",
//   };

//   const userInfoStyle = {
//     fontSize: "17px",
//     lineHeight: "1.5",
//     padding: "12px",
//     backgroundColor: "#1f2937",
//     borderRadius: "6px",
//     marginTop: "12px",
//   };

//   const btnLinkStyle = {
//     background: "none",
//     border: "none",
//     color: "#3b82f6",
//     cursor: "pointer",
//     padding: "0",
//     marginTop: "8px",
//     fontSize: "13px",
//   };

//   const navItems = [
//     { path: "/for-you", label: "For You" },
//     { path: "/projects", label: "Projects" },
//     { path: "/kanban", label: "Boards" },
//     { path: "/backlog", label: "Backlog" },
//     { path: "/issues/new", label: "Create Issue" },
//     { path: "/assets", label: "Assets" },
//     { path: "/timeline", label: "Timeline" },
//     { path: "/users", label: "Users" },
//     { path: "/notifications", label: "Notifications" },
//   ];

//   return (
//     <div style={appShellStyle} role="application" aria-label="Ticketing application">
//       <aside style={sidebarStyle} aria-label="Sidebar navigation">
//         <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
//           <button style={menuButtonStyle} onClick={toggleSidebar} aria-label="Toggle sidebar">
//             <FiMenu size={20} />
//           </button>
//           {sidebarOpen && <span style={{ fontWeight: "bold" }}>Flow Track</span>}
//         </div>

//         <nav role="navigation" aria-label="Main">
//           {navItems.map(({ path, label }) => {
//             const combinedStyle = {
//               ...navLinkStyle,
//               ...(hoveredPath === path ? navLinkHoverStyle : {}),
//             };

//             return (
//               <Link
//                 key={path}
//                 to={path}
//                 style={combinedStyle}
//                 onMouseEnter={() => setHoveredPath(path)}
//                 onMouseLeave={() => setHoveredPath(null)}
//               >
//                 {sidebarOpen ? label : label.charAt(0)}
//               </Link>
//             );
//           })}
//         </nav>

//         <div>
//           {user ? (
//             <div style={userInfoStyle} aria-label="User Profile">
//               <div>
//                 <strong>{user.name}</strong>
//               </div>
//               <div>{user.email}</div>
//               <button style={btnLinkStyle} onClick={logout}>
//                 Sign out
//               </button>
//             </div>
//           ) : (
//             <Link to="/login" style={navLinkStyle}>
//               Sign in
//             </Link>
//           )}
//         </div>
//       </aside>

//       <div style={contentStyle}>
//         <header style={topbarStyle} role="banner">
//           <div>
//             <h1 style={{ margin: 0, fontSize: "20px" }}>Flow Track</h1>
//           </div>
//           <div style={{ fontSize: "12px", color: "#666" }}>
//             Accessible demo • keyboard friendly
//           </div>
//         </header>

//         <main id="main" tabIndex="-1" role="main">
//           <Routes>
//             <Route path="/projects" element={<PrivateRoute><ProjectList /></PrivateRoute>} />
//             <Route path="/projects/:id" element={<PrivateRoute><ProjectView /></PrivateRoute>} />
//             <Route path="/kanban/:projectId?" element={<PrivateRoute><KanbanBoard /></PrivateRoute>} />
//             <Route path="/backlog/:projectId?" element={<PrivateRoute><Backlog /></PrivateRoute>} />
//             <Route path="/issues/new" element={<PrivateRoute><IssueCreate /></PrivateRoute>} />
//             <Route path="/issues/:id" element={<PrivateRoute><IssueDetails /></PrivateRoute>} />
//             <Route path="/assets" element={<PrivateRoute><Assets /></PrivateRoute>} />
//             <Route path="/timeline" element={<PrivateRoute><Timeline /></PrivateRoute>} />
//             <Route path="/users" element={<PrivateRoute><Users /></PrivateRoute>} />
//             <Route path="/notifications" element={<PrivateRoute><Notifications /></PrivateRoute>} />
//             <Route path="/for-you" element={<PrivateRoute><ForYou /></PrivateRoute>} />

//             {/* ✅ Redirect root */}
//             <Route
//               path="/"
//               element={user ? <Navigate to="/for-you" replace /> : <Navigate to="/login" replace />}
//             />
//           </Routes>
//         </main>
//       </div>
//     </div>
//   );
// }



// import React, { useState } from "react";
// import { Routes, Route, Link, Navigate } from "react-router-dom";
// import { AuthProvider, useAuth } from "./context/AuthContext";
// import { ProjectProvider } from "./context/ProjectContext";

// import Login from "./components/auth/Login";
// import Users from "./components/users/Users";
// import ProjectList from "./components/projects/ProjectList";
// import ProjectCreate from "./components/projects/ProjectCreate"; // New import
// import ProjectView from "./components/projects/ProjectView";
// import KanbanBoard from "./components/boards/KanbanBoard";
// import Backlog from "./components/backlog/Backlog";
// import IssueDetails from "./components/issues/IssueDetails";
// import IssueCreate from "./components/issues/IssueCreate";
// import Assets from "./components/assets/Assets";
// import Timeline from "./components/timeline/Timeline";
// import ForYou from "./components/dashboard/ForYou";
// import Notifications from "./components/notifications/Notifications";
// import { FiMenu } from "react-icons/fi";

// function PrivateRoute({ children }) {
//   const { user } = useAuth();
//   return user ? children : <Navigate to="/login" replace />;
// }

// export default function App() {
//   return (
//     <AuthProvider>
//       <ProjectProvider>
//         <Routes>
//           {/* Login */}
//           <Route path="/login" element={<Login />} />

//           {/* All other routes */}
//           <Route path="/*" element={<Layout />} />
//         </Routes>
//       </ProjectProvider>
//     </AuthProvider>
//   );
// }

// function Layout() {
//   const { user, logout } = useAuth();
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [hoveredPath, setHoveredPath] = useState(null);

//   const toggleSidebar = () => setSidebarOpen((prev) => !prev);

//   const sidebarStyle = {
//     width: sidebarOpen ? "240px" : "70px",
//     transition: "width 0.3s ease",
//     backgroundColor: "#111827",
//     color: "#fff",
//     height: "100vh",
//     padding: "16px 12px",
//     boxSizing: "border-box",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//     boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
//   };

//   const navLinkStyle = {
//     display: "block",
//     padding: sidebarOpen ? "10px 16px" : "10px 0",
//     color: "#e5e7eb",
//     textDecoration: "none",
//     fontSize: "15px",
//     margin: "6px 0",
//     borderRadius: "6px",
//     backgroundColor: "#1f2937",
//     transition: "all 0.2s ease",
//     fontWeight: "500",
//     textAlign: sidebarOpen ? "left" : "center",
//   };

//   const navLinkHoverStyle = {
//     backgroundColor: "#ffffff",
//     color: "#374151",
//   };

//   const contentStyle = {
//     flex: 1,
//     padding: "24px",
//     backgroundColor: "#f9fafb",
//     height: "100vh",
//     overflowY: "auto",
//   };

//   const topbarStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     backgroundColor: "#ffffff",
//     padding: "16px 24px",
//     borderBottom: "1px solid #e5e7eb",
//     boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
//   };

//   const appShellStyle = {
//     display: "flex",
//     fontFamily: "Segoe UI, Roboto, sans-serif",
//     fontSize: "14px",
//     color: "#111827",
//   };

//   const menuButtonStyle = {
//     background: "none",
//     border: "none",
//     color: "#e5e7eb",
//     cursor: "pointer",
//     marginRight: "8px",
//     padding: "4px",
//   };

//   const userInfoStyle = {
//     fontSize: "17px",
//     lineHeight: "1.5",
//     padding: "12px",
//     backgroundColor: "#1f2937",
//     borderRadius: "6px",
//     marginTop: "12px",
//   };

//   const btnLinkStyle = {
//     background: "none",
//     border: "none",
//     color: "#3b82f6",
//     cursor: "pointer",
//     padding: "0",
//     marginTop: "8px",
//     fontSize: "13px",
//   };

//   const navItems = [
//     { path: "/for-you", label: "For You" },
//     { path: "/projects", label: "Projects" },
//     { path: "/projects/new", label: "Create Project" }, // Added
//     { path: "/kanban", label: "Boards" },
//     { path: "/backlog", label: "Backlog" },
//     { path: "/issues/new", label: "Create Issue" },
//     { path: "/assets", label: "Assets" },
//     { path: "/timeline", label: "Timeline" },
//     { path: "/users", label: "Users" },
//     { path: "/notifications", label: "Notifications" },
//   ];

//   return (
//     <div style={appShellStyle}>
//       <aside style={sidebarStyle}>
//         <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
//           <button style={menuButtonStyle} onClick={toggleSidebar}>
//             <FiMenu size={20} />
//           </button>
//           {sidebarOpen && <span style={{ fontWeight: "bold" }}>Flow Track</span>}
//         </div>

//         <nav>
//           {navItems.map(({ path, label }) => {
//             const combinedStyle = {
//               ...navLinkStyle,
//               ...(hoveredPath === path ? navLinkHoverStyle : {}),
//             };

//             return (
//               <Link
//                 key={path}
//                 to={path}
//                 style={combinedStyle}
//                 onMouseEnter={() => setHoveredPath(path)}
//                 onMouseLeave={() => setHoveredPath(null)}
//               >
//                 {sidebarOpen ? label : label.charAt(0)}
//               </Link>
//             );
//           })}
//         </nav>

//         <div>
//           {user ? (
//             <div style={userInfoStyle}>
//               <div>
//                 <strong>{user.name}</strong>
//               </div>
//               <div>{user.email}</div>
//               <button style={btnLinkStyle} onClick={logout}>
//                 Sign out
//               </button>
//             </div>
//           ) : (
//             <Link to="/login" style={navLinkStyle}>
//               Sign in
//             </Link>
//           )}
//         </div>
//       </aside>

//       <div style={contentStyle}>
//         <header style={topbarStyle}>
//           <div>
//             <h1 style={{ margin: 0, fontSize: "20px" }}>Flow Track</h1>
//           </div>
//           <div style={{ fontSize: "12px", color: "#666" }}>
//             Accessible demo • keyboard friendly
//           </div>
//         </header>

//         <main id="main" tabIndex="-1">
//           <Routes>
//             <Route path="/projects" element={<PrivateRoute><ProjectList /></PrivateRoute>} />
//             <Route path="/projects/new" element={<PrivateRoute><ProjectCreate /></PrivateRoute>} />
//             <Route path="/projects/:id" element={<PrivateRoute><ProjectView /></PrivateRoute>} />
//             <Route path="/kanban/:projectId?" element={<PrivateRoute><KanbanBoard /></PrivateRoute>} />
//             <Route path="/backlog/:projectId?" element={<PrivateRoute><Backlog /></PrivateRoute>} />
//             <Route path="/issues/new" element={<PrivateRoute><IssueCreate /></PrivateRoute>} />
//             <Route path="/issues/:id" element={<PrivateRoute><IssueDetails /></PrivateRoute>} />
//             <Route path="/assets" element={<PrivateRoute><Assets /></PrivateRoute>} />
//             <Route path="/timeline" element={<PrivateRoute><Timeline /></PrivateRoute>} />
//             <Route path="/users" element={<PrivateRoute><Users /></PrivateRoute>} />
//             <Route path="/notifications" element={<PrivateRoute><Notifications /></PrivateRoute>} />
//             <Route path="/for-you" element={<PrivateRoute><ForYou /></PrivateRoute>} />

//             <Route
//               path="/"
//               element={user ? <Navigate to="/for-you" replace /> : <Navigate to="/login" replace />}
//             />
//           </Routes>
//         </main>
//       </div>
//     </div>
//   );
// }










// import React, { useState } from "react";
// import { Routes, Route, Link, Navigate } from "react-router-dom";
// import { AuthProvider, useAuth } from "./context/AuthContext";
// import { ProjectProvider } from "./context/ProjectContext";

// import Login from "./components/auth/Login";
// import Users from "./components/users/Users";
// import ProjectList from "./components/projects/ProjectList";
// import ProjectCreate from "./components/projects/ProjectCreate";
// import ProjectView from "./components/projects/ProjectView";
// import KanbanBoard from "./components/boards/KanbanBoard";
// import Backlog from "./components/backlog/Backlog";
// import IssueDetails from "./components/issues/IssueDetails";
// import IssueCreate from "./components/issues/IssueCreate";
// import Assets from "./components/assets/Assets";
// import Timeline from "./components/timeline/Timeline";
// import ForYou from "./components/dashboard/ForYou";
// import Notifications from "./components/notifications/Notifications";
// import { FiMenu } from "react-icons/fi";

// function PrivateRoute({ children }) {
//   const { user } = useAuth();
//   return user ? children : <Navigate to="/login" replace />;
// }

// export default function App() {
//   return (
//     <AuthProvider>
//       <ProjectProvider>
//         <Routes>
//           {/* Login */}
//           <Route path="/login" element={<Login />} />

//           {/* All other routes */}
//           <Route path="/*" element={<Layout />} />
//         </Routes>
//       </ProjectProvider>
//     </AuthProvider>
//   );
// }

// function Layout() {
//   const { user, logout } = useAuth();
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [hoveredPath, setHoveredPath] = useState(null);

//   const toggleSidebar = () => setSidebarOpen((prev) => !prev);

//   const sidebarStyle = {
//     width: sidebarOpen ? "240px" : "70px",
//     transition: "width 0.3s ease",
//     backgroundColor: "#111827",
//     color: "#fff",
//     height: "100vh",
//     padding: "16px 12px",
//     boxSizing: "border-box",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//     boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
//   };

//   const navLinkStyle = {
//     display: "block",
//     padding: sidebarOpen ? "10px 16px" : "10px 0",
//     color: "#e5e7eb",
//     textDecoration: "none",
//     fontSize: "15px",
//     margin: "6px 0",
//     borderRadius: "6px",
//     backgroundColor: "#1f2937",
//     transition: "all 0.2s ease",
//     fontWeight: "500",
//     textAlign: sidebarOpen ? "left" : "center",
//   };

//   const navLinkHoverStyle = {
//     backgroundColor: "#ffffff",
//     color: "#374151",
//   };

//   const contentStyle = {
//     flex: 1,
//     padding: "24px",
//     backgroundColor: "#f9fafb",
//     height: "100vh",
//     overflowY: "auto",
//   };

//   const topbarStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     backgroundColor: "#ffffff",
//     padding: "16px 24px",
//     borderBottom: "1px solid #e5e7eb",
//     boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
//   };

//   const appShellStyle = {
//     display: "flex",
//     fontFamily: "Segoe UI, Roboto, sans-serif",
//     fontSize: "14px",
//     color: "#111827",
//   };

//   const menuButtonStyle = {
//     background: "none",
//     border: "none",
//     color: "#e5e7eb",
//     cursor: "pointer",
//     marginRight: "8px",
//     padding: "4px",
//   };

//   const userInfoStyle = {
//     fontSize: "17px",
//     lineHeight: "1.5",
//     padding: "12px",
//     backgroundColor: "#1f2937",
//     borderRadius: "6px",
//     marginTop: "12px",
//   };

//   const btnLinkStyle = {
//     background: "none",
//     border: "none",
//     color: "#3b82f6",
//     cursor: "pointer",
//     padding: "0",
//     marginTop: "8px",
//     fontSize: "13px",
//   };

//   const navItems = [
//     { path: "/for-you", label: "For You" },
//     { path: "/projects", label: "Projects" },
//     { path: "/projects/new", label: "Create Project" }, // Fixed
//     { path: "/kanban", label: "Boards" },
//     { path: "/backlog", label: "Backlog" },
//     { path: "/issues/new", label: "Create Issue" },
//     { path: "/assets", label: "Assets" },
//     { path: "/timeline", label: "Timeline" },
//     { path: "/users", label: "Users" },
//     { path: "/notifications", label: "Notifications" },
//   ];

//   return (
//     <div style={appShellStyle}>
//       <aside style={sidebarStyle}>
//         <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
//           <button style={menuButtonStyle} onClick={toggleSidebar}>
//             <FiMenu size={20} />
//           </button>
//           {sidebarOpen && <span style={{ fontWeight: "bold" }}>Flow Track</span>}
//         </div>

//         <nav>
//           {navItems.map(({ path, label }) => {
//             const combinedStyle = {
//               ...navLinkStyle,
//               ...(hoveredPath === path ? navLinkHoverStyle : {}),
//             };

//             return (
//               <Link
//                 key={path}
//                 to={path}
//                 style={combinedStyle}
//                 onMouseEnter={() => setHoveredPath(path)}
//                 onMouseLeave={() => setHoveredPath(null)}
//               >
//                 {sidebarOpen ? label : label.charAt(0)}
//               </Link>
//             );
//           })}
//         </nav>

//         <div>
//           {user ? (
//             <div style={userInfoStyle}>
//               <div>
//                 <strong>{user.name}</strong>
//               </div>
//               <div>{user.email}</div>
//               <button style={btnLinkStyle} onClick={logout}>
//                 Sign out
//               </button>
//             </div>
//           ) : (
//             <Link to="/login" style={navLinkStyle}>
//               Sign in
//             </Link>
//           )}
//         </div>
//       </aside>

//       <div style={contentStyle}>
//         <header style={topbarStyle}>
//           <div>
//             <h1 style={{ margin: 0, fontSize: "20px" }}>Flow Track</h1>
//           </div>
//           <div style={{ fontSize: "12px", color: "#666" }}>
//             Accessible demo • keyboard friendly
//           </div>
//         </header>

//         <main id="main" tabIndex="-1">
//           <Routes>
//             <Route path="/projects" element={<PrivateRoute><ProjectList /></PrivateRoute>} />
//             <Route path="/projects/new" element={<PrivateRoute><ProjectCreate /></PrivateRoute>} />
//             <Route path="/projects/:id" element={<PrivateRoute><ProjectView /></PrivateRoute>} />
//             <Route path="/kanban/:projectId?" element={<PrivateRoute><KanbanBoard /></PrivateRoute>} />
//             <Route path="/backlog/:projectId?" element={<PrivateRoute><Backlog /></PrivateRoute>} />
//             <Route path="/issues/new" element={<PrivateRoute><IssueCreate /></PrivateRoute>} />
//             <Route path="/issues/:id" element={<PrivateRoute><IssueDetails /></PrivateRoute>} />
//             <Route path="/assets" element={<PrivateRoute><Assets /></PrivateRoute>} />
//             <Route path="/timeline" element={<PrivateRoute><Timeline /></PrivateRoute>} />
//             <Route path="/users" element={<PrivateRoute><Users /></PrivateRoute>} />
//             <Route path="/notifications" element={<PrivateRoute><Notifications /></PrivateRoute>} />
//             <Route path="/for-you" element={<PrivateRoute><ForYou /></PrivateRoute>} />

//             <Route
//               path="/"
//               element={user ? <Navigate to="/for-you" replace /> : <Navigate to="/login" replace />}
//             />
//           </Routes>
//         </main>
//       </div>
//     </div>
//   );
// }







// import React, { useState } from "react";
// import { Routes, Route, Link, Navigate } from "react-router-dom";
// import { AuthProvider, useAuth } from "./context/AuthContext";
// import { ProjectProvider } from "./context/ProjectContext";

// import Login from "./components/auth/Login";
// import Users from "./components/users/Users";
// import ProjectList from "./components/projects/ProjectList";
// import ProjectView from "./components/projects/ProjectView";
// import KanbanBoard from "./components/boards/KanbanBoard";
// import Backlog from "./components/backlog/Backlog";
// import IssueDetails from "./components/issues/IssueDetails";
// import IssueCreate from "./components/issues/IssueCreate";
// import Assets from "./components/assets/Assets";
// import Timeline from "./components/timeline/Timeline";
// import ForYou from "./components/dashboard/ForYou";
// import Notifications from "./components/notifications/Notifications";
// import { FiMenu } from "react-icons/fi";

// function PrivateRoute({ children }) {
//   const { user } = useAuth();
//   return user ? children : <Navigate to="/login" replace />;
// }

// export default function App() {
//   return (
//     <AuthProvider>
//       <ProjectProvider>
//         <Routes>
//           {/* Login */}
//           <Route path="/login" element={<Login />} />

//           {/* All other routes */}
//           <Route path="/*" element={<Layout />} />
//         </Routes>
//       </ProjectProvider>
//     </AuthProvider>
//   );
// }

// function Layout() {
//   const { user, logout } = useAuth();
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [hoveredPath, setHoveredPath] = useState(null);

//   const toggleSidebar = () => setSidebarOpen((prev) => !prev);

//   const sidebarStyle = {
//     width: sidebarOpen ? "240px" : "70px",
//     transition: "width 0.3s ease",
//     backgroundColor: "#111827",
//     color: "#fff",
//     height: "100vh",
//     padding: "16px 12px",
//     boxSizing: "border-box",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//     boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
//   };

//   const navLinkStyle = {
//     display: "block",
//     padding: sidebarOpen ? "10px 16px" : "10px 0",
//     color: "#e5e7eb",
//     textDecoration: "none",
//     fontSize: "15px",
//     margin: "6px 0",
//     borderRadius: "6px",
//     backgroundColor: "#1f2937",
//     transition: "all 0.2s ease",
//     fontWeight: "500",
//     textAlign: sidebarOpen ? "left" : "center",
//   };

//   const navLinkHoverStyle = {
//     backgroundColor: "#ffffff",
//     color: "#374151",
//   };

//   const contentStyle = {
//     flex: 1,
//     padding: "24px",
//     backgroundColor: "#f9fafb",
//     height: "100vh",
//     overflowY: "auto",
//   };

//   const topbarStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     backgroundColor: "#ffffff",
//     padding: "16px 24px",
//     borderBottom: "1px solid #e5e7eb",
//     boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
//   };

//   const appShellStyle = {
//     display: "flex",
//     fontFamily: "Segoe UI, Roboto, sans-serif",
//     fontSize: "14px",
//     color: "#111827",
//   };

//   const menuButtonStyle = {
//     background: "none",
//     border: "none",
//     color: "#e5e7eb",
//     cursor: "pointer",
//     marginRight: "8px",
//     padding: "4px",
//   };

//   const userInfoStyle = {
//     fontSize: "17px",
//     lineHeight: "1.5",
//     padding: "12px",
//     backgroundColor: "#1f2937",
//     borderRadius: "6px",
//     marginTop: "12px",
//   };

//   const btnLinkStyle = {
//     background: "none",
//     border: "none",
//     color: "#3b82f6",
//     cursor: "pointer",
//     padding: "0",
//     marginTop: "8px",
//     fontSize: "13px",
//   };

//   const navItems = [
//     { path: "/for-you", label: "For You" },
//     { path: "/projects", label: "Projects" },
//     { path: "/projects/new", label: "Create Project" }, // points to ProjectView
//     { path: "/kanban", label: "Boards" },
//     { path: "/backlog", label: "Backlog" },
//     { path: "/issues/new", label: "Create Issue" },
//     { path: "/assets", label: "Assets" },
//     { path: "/timeline", label: "Timeline" },
//     { path: "/users", label: "Users" },
//     { path: "/notifications", label: "Notifications" },
//   ];

//   return (
//     <div style={appShellStyle}>
//       <aside style={sidebarStyle}>
//         <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
//           <button style={menuButtonStyle} onClick={toggleSidebar}>
//             <FiMenu size={20} />
//           </button>
//           {sidebarOpen && <span style={{ fontWeight: "bold" }}>Flow Track</span>}
//         </div>

//         <nav>
//           {navItems.map(({ path, label }) => {
//             const combinedStyle = {
//               ...navLinkStyle,
//               ...(hoveredPath === path ? navLinkHoverStyle : {}),
//             };

//             return (
//               <Link
//                 key={path}
//                 to={path}
//                 style={combinedStyle}
//                 onMouseEnter={() => setHoveredPath(path)}
//                 onMouseLeave={() => setHoveredPath(null)}
//               >
//                 {sidebarOpen ? label : label.charAt(0)}
//               </Link>
//             );
//           })}
//         </nav>

//         <div>
//           {user ? (
//             <div style={userInfoStyle}>
//               <div>
//                 <strong>{user.name}</strong>
//               </div>
//               <div>{user.email}</div>
//               <button style={btnLinkStyle} onClick={logout}>
//                 Sign out
//               </button>
//             </div>
//           ) : (
//             <Link to="/login" style={navLinkStyle}>
//               Sign in
//             </Link>
//           )}
//         </div>
//       </aside>

//       <div style={contentStyle}>
//         <header style={topbarStyle}>
//           <div>
//             <h1 style={{ margin: 0, fontSize: "20px" }}>Flow Track</h1>
//           </div>
//           <div style={{ fontSize: "12px", color: "#666" }}>
//             Accessible demo • keyboard friendly
//           </div>
//         </header>

//         <main id="main" tabIndex="-1">
//           <Routes>
//             <Route path="/projects" element={<PrivateRoute><ProjectList /></PrivateRoute>} />
//             <Route path="/projects/new" element={<PrivateRoute><ProjectView /></PrivateRoute>} />
//             <Route path="/projects/:id" element={<PrivateRoute><ProjectView /></PrivateRoute>} />
//             <Route path="/kanban/:projectId?" element={<PrivateRoute><KanbanBoard /></PrivateRoute>} />
//             <Route path="/backlog/:projectId?" element={<PrivateRoute><Backlog /></PrivateRoute>} />
//             <Route path="/issues/new" element={<PrivateRoute><IssueCreate /></PrivateRoute>} />
//             <Route path="/issues/:id" element={<PrivateRoute><IssueDetails /></PrivateRoute>} />
//             <Route path="/assets" element={<PrivateRoute><Assets /></PrivateRoute>} />
//             <Route path="/timeline" element={<PrivateRoute><Timeline /></PrivateRoute>} />
//             <Route path="/users" element={<PrivateRoute><Users /></PrivateRoute>} />
//             <Route path="/notifications" element={<PrivateRoute><Notifications /></PrivateRoute>} />
//             <Route path="/for-you" element={<PrivateRoute><ForYou /></PrivateRoute>} />

//             <Route
//               path="/"
//               element={user ? <Navigate to="/for-you" replace /> : <Navigate to="/login" replace />}
//             />
//           </Routes>
//         </main>
//       </div>
//     </div>
//   );
// }



// import React, { useState } from "react";
// import { Routes, Route, Link, Navigate } from "react-router-dom";
// import { AuthProvider, useAuth } from "./context/AuthContext";
// import { ProjectProvider } from "./context/ProjectContext";

// import Login from "./components/auth/Login";
// import Users from "./components/users/Users";
// import ProjectList from "./components/projects/ProjectList";
// import ProjectView from "./components/projects/ProjectView";
// import KanbanBoard from "./components/boards/KanbanBoard";
// import Backlog from "./components/backlog/Backlog";
// import IssueDetails from "./components/issues/IssueDetails";
// import IssueCreate from "./components/issues/IssueCreate";
// import Assets from "./components/assets/Assets";
// import Timeline from "./components/timeline/Timeline";
// import ForYou from "./components/dashboard/ForYou";
// import Notifications from "./components/notifications/Notifications";
// import { FiMenu } from "react-icons/fi";

// function PrivateRoute({ children }) {
//   const { user } = useAuth();
//   return user ? children : <Navigate to="/login" replace />;
// }

// export default function App() {
//   return (
//     <AuthProvider>
//       <ProjectProvider>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/*" element={<Layout />} />
//         </Routes>
//       </ProjectProvider>
//     </AuthProvider>
//   );
// }

// function Layout() {
//   const { user, logout } = useAuth();
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [hoveredPath, setHoveredPath] = useState(null);

//   const toggleSidebar = () => setSidebarOpen((prev) => !prev);

//   const sidebarStyle = {
//     width: sidebarOpen ? "240px" : "70px",
//     transition: "width 0.3s ease",
//     backgroundColor: "#111827",
//     color: "#fff",
//     height: "100vh",
//     padding: "16px 12px",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//   };

//   const navLinkStyle = {
//     display: "block",
//     padding: sidebarOpen ? "10px 16px" : "10px 0",
//     color: "#e5e7eb",
//     textDecoration: "none",
//     margin: "6px 0",
//     borderRadius: "6px",
//     backgroundColor: "#1f2937",
//     textAlign: sidebarOpen ? "left" : "center",
//   };

//   const navLinkHoverStyle = {
//     backgroundColor: "#ffffff",
//     color: "#374151",
//   };

//   const contentStyle = {
//     flex: 1,
//     padding: "24px",
//     backgroundColor: "#f9fafb",
//     height: "100vh",
//     overflowY: "auto",
//   };

//   const topbarStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     backgroundColor: "#ffffff",
//     padding: "16px 24px",
//     borderBottom: "1px solid #e5e7eb",
//   };

//   const appShellStyle = {
//     display: "flex",
//     fontFamily: "Segoe UI, Roboto, sans-serif",
//     fontSize: "14px",
//     color: "#111827",
//   };

//   const menuButtonStyle = { background: "none", border: "none", color: "#e5e7eb", cursor: "pointer", marginRight: "8px" };
//   const userInfoStyle = { fontSize: "17px", padding: "12px", backgroundColor: "#1f2937", borderRadius: "6px", marginTop: "12px" };
//   const btnLinkStyle = { background: "none", border: "none", color: "#3b82f6", cursor: "pointer", padding: 0, marginTop: "8px", fontSize: "13px" };

//   const navItems = [
//     { path: "/for-you", label: "For You" },
//     { path: "/projects", label: "Projects" },
//     // { path: "/projects/new", label: "Create Project" },
//     { path: currentProjectId ? `/kanban/${currentProjectId}` : '/kanban/:id', label: 'Boards' },
//     { path: currentProjectId ? `/backlog/${currentProjectId}` : '/backlog/:id', label: 'Backlog' },
//     // { path: "/kanban", label: "Boards" },
//     // { path: "/backlog", label: "Backlog" },
//     { path: "/issues/new", label: "Create Issue" },
//     { path: "/assets", label: "Assets" },
//     { path: "/timeline", label: "Timeline" },
//     { path: "/users", label: "Users" },
//     { path: "/notifications", label: "Notifications" },
//   ];

//   return (
//     <div style={appShellStyle}>
//       <aside style={sidebarStyle}>
//         <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
//           <button style={menuButtonStyle} onClick={toggleSidebar}><FiMenu size={20} /></button>
//           {sidebarOpen && <span style={{ fontWeight: "bold" }}>Flow Track</span>}
//         </div>

//         <nav>
//           {navItems.map(({ path, label }) => {
//             const combinedStyle = { ...navLinkStyle, ...(hoveredPath === path ? navLinkHoverStyle : {}) };
//             return (
//               <Link key={path} to={path} style={combinedStyle} onMouseEnter={() => setHoveredPath(path)} onMouseLeave={() => setHoveredPath(null)}>
//                 {sidebarOpen ? label : label.charAt(0)}
//               </Link>
//             );
//           })}
//         </nav>

//         <div>
//           {user ? (
//             <div style={userInfoStyle}>
//               <div><strong>{user.name}</strong></div>
//               <div>{user.email}</div>
//               <button style={btnLinkStyle} onClick={logout}>Sign out</button>
//             </div>
//           ) : (
//             <Link to="/login" style={navLinkStyle}>Sign in</Link>
//           )}
//         </div>
//       </aside>

//       <div style={contentStyle}>
//         <header style={topbarStyle}>
//           <div><h1 style={{ margin: 0, fontSize: "20px" }}>Flow Track</h1></div>
//           <div style={{ fontSize: "12px", color: "#666" }}>Accessible demo • keyboard friendly</div>
//         </header>

//         <main id="main" tabIndex="-1">
//           <Routes>
//             <Route path="/projects" element={<PrivateRoute><ProjectList /></PrivateRoute>} />
//             <Route path="/projects/new" element={<PrivateRoute><ProjectList /></PrivateRoute>} />
//             <Route path="/projects/:id" element={<PrivateRoute><ProjectView /></PrivateRoute>} />
//             {/* <Route path="/kanban/:projectId?" element={<PrivateRoute><KanbanBoard /></PrivateRoute>} />
//             <Route path="/backlog/:projectId?" element={<PrivateRoute><Backlog /></PrivateRoute>} /> */}
//             <Route path="/kanban/:id" element={<KanbanBoard />} />
//             <Route path="/backlog/:id" element={<Backlog />} />
//             <Route path="/issues/new" element={<PrivateRoute><IssueCreate /></PrivateRoute>} />
//             <Route path="/issues/:id" element={<PrivateRoute><IssueDetails /></PrivateRoute>} />
//             <Route path="/assets" element={<PrivateRoute><Assets /></PrivateRoute>} />
//             <Route path="/timeline" element={<PrivateRoute><Timeline /></PrivateRoute>} />
//             <Route path="/users" element={<PrivateRoute><Users /></PrivateRoute>} />
//             <Route path="/notifications" element={<PrivateRoute><Notifications /></PrivateRoute>} />
//             <Route path="/for-you" element={<PrivateRoute><ForYou /></PrivateRoute>} />
//             <Route path="/" element={user ? <Navigate to="/for-you" replace /> : <Navigate to="/login" replace />} />
//           </Routes>
//         </main>
//       </div>
//     </div>
//   );
// }








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
//           {/* Landing route "/" always shows Login unless authenticated */}
//           <Route path="/" element={<AuthLanding />} />
//           {/* Actual login route */}
//           <Route path="/login" element={<LoginRedirectAfterAuth />} />
//           {/* All other routes handled in layout, wrapped by PrivateRoute */}
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
 
// // Redirect to login if not authenticated, else go to main dashboard
// function AuthLanding() {
//   const { user } = useAuth();
//   if (!user) {
//     return <Navigate to="/login" replace />;
//   } else {
//     return <Navigate to="/for-you" replace />;
//   }
// }
 
// // Login component with navigation after successful auth
// function LoginRedirectAfterAuth() {
//   const { user } = useAuth();
//   const navigate = useNavigate();
 
//   useEffect(() => {
//     if (user) {
//       navigate("/for-you", { replace: true });
//     }
//   }, [user, navigate]);
 
//   // Always show Login form (it internally handles login and triggers the above navigation)
//   return <Login />;
// }
 
// function Layout() {
//   const { user, logout } = useAuth();
//   const { projects } = useProjects();
 
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [currentProjectId, setCurrentProjectId] = useState(null);
 
//   useEffect(() => {
//     if (projects.length > 0) {
//       setCurrentProjectId(projects[0].id);
//     } else {
//       setCurrentProjectId(null);
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
//     { path: currentProjectId ? `/kanban/${currentProjectId}` : '/kanban/:id', label: 'Boards' },
//     // { path: currentProjectId ? `/backlog/${currentProjectId}` : '/backlog/:id', label: 'Backlog' },
//     // { path: '/issues/new', label: 'Create Issue' },
//     { path: '/assets', label: 'Assets' },
//     { path: '/timeline', label: 'Timeline' },
//     { path: '/users', label: 'Users' },
//     // { path: '/notifications', label: 'Notifications' }
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
//             <Route path="/kanban/:id" element={<KanbanBoard />} />
//             <Route path="/backlog/:id" element={<Backlog />} />
//             <Route path="/issues/new" element={<IssueCreate />} />
//             <Route path="/issues/:id" element={<IssueDetails />} />
//             <Route path="/assets" element={<Assets />} />
//             <Route path="/timeline" element={<Timeline />} />
//             <Route path="/users" element={<Users />} />
//             <Route path="/notifications" element={<Notifications />} />
//             <Route path="/for-you" element={<ForYou />} />
//             {/* Redirect unmatched subroutes to dashboard */}
//             <Route path="*" element={<Navigate to="/for-you" replace />} />
//           </Routes>
//         </main>
//       </div>
//     </div>
//   );
// }






//for project boards
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
 
  const [sidebarOpen, setSidebarOpen] = useState(true);
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
    padding: '16px 12px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '2px 0 8px rgba(0,0,0,0.1)'
  };
 
  const navLinkStyle = {
    display: 'block',
    padding: sidebarOpen ? '10px 16px' : '10px 0',
    color: '#e5e7eb',
    textDecoration: 'none',
    fontSize: '15px',
    margin: '6px 0',
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
    padding: '24px',
    backgroundColor: '#f9fafb',
    height: '100vh',
    overflowY: 'auto'
  };
 
  const topbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: '16px 24px',
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
    fontSize: '17px',
    lineHeight: '1.5',
    padding: '12px',
    backgroundColor: '#1f2937',
    borderRadius: '6px',
    marginTop: '12px'
  };
 
  const btnLinkStyle = {
    background: 'none',
    border: 'none',
    color: '#3b82f6',
    cursor: 'pointer',
    padding: '0',
    marginTop: '8px',
    fontSize: '13px'
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
            <h1 style={{ margin: 0, fontSize: '20px' }}>Flow Track</h1>
          </div>
          <div style={{ fontSize: '12px', color: '#666' }}>Accessible demo • keyboard friendly</div>
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









///////////////////////////////////////////////////////////////////////////////////////
