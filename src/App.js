
import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

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

function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  );
}

function Layout() {
  const { user, logout } = useAuth();

  return (
    <div className="app-shell" role="application" aria-label="Ticketing application">
      <aside className="sidebar" aria-label="Sidebar navigation">
        <div className="sidebar-brand" aria-hidden="true">
          <FiMenu size={20} /> <span>Ticketing</span>
        </div>
        <nav className="sidebar-nav" role="navigation" aria-label="Main">
          <Link to="/for-you" className="nav-link">For You</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/kanban" className="nav-link">Boards</Link>
          <Link to="/backlog" className="nav-link">Backlog</Link>
          <Link to="/issues/new" className="nav-link">Create Issue</Link>
          <Link to="/assets" className="nav-link">Assets</Link>
          <Link to="/timeline" className="nav-link">Timeline</Link>
          <Link to="/users" className="nav-link">Users</Link>
          <Link to="/notifications" className="nav-link">Notifications</Link>
        </nav>
        <div className="sidebar-footer">
          {user ? (
            <div className="user-info" aria-label="User Profile">
              <div><strong>{user.name}</strong></div>
              <div className="small">{user.email}</div>
              <button className="btn-link" onClick={logout}>Sign out</button>
            </div>
          ) : <Link to="/login" className="nav-link">Sign in</Link>}
        </div>
      </aside>

      <div className="content">
        <header className="topbar" role="banner">
          <div className="topbar-left"><h1 className="app-title">Ticketing — Jira-like</h1></div>
          <div className="topbar-right small">Accessible demo • keyboard friendly</div>
        </header>

        <main id="main" tabIndex="-1" className="main" role="main">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/projects" element={<PrivateRoute><ProjectList /></PrivateRoute>} />
            <Route path="/projects/:id" element={<PrivateRoute><ProjectView /></PrivateRoute>} />
            <Route path="/kanban/:projectId?" element={<PrivateRoute><KanbanBoard /></PrivateRoute>} />
            <Route path="/backlog/:projectId?" element={<PrivateRoute><Backlog /></PrivateRoute>} />
            <Route path="/issues/new" element={<PrivateRoute><IssueCreate /></PrivateRoute>} />
            <Route path="/issues/:id" element={<PrivateRoute><IssueDetails /></PrivateRoute>} />
            <Route path="/assets" element={<PrivateRoute><Assets /></PrivateRoute>} />
            <Route path="/timeline" element={<PrivateRoute><Timeline /></PrivateRoute>} />
            <Route path="/users" element={<PrivateRoute><Users /></PrivateRoute>} />
            <Route path="/notifications" element={<PrivateRoute><Notifications /></PrivateRoute>} />
            <Route path="/for-you" element={<PrivateRoute><ForYou /></PrivateRoute>} />
            <Route path="/" element={<Navigate to="/for-you" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
