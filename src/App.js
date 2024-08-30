import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './pages/ProtectedRoute';
import PageNotFound from './pages/PageNotFound';
import Overview from './pages/Overview';
import Stats from './pages/Stats';
import Users from './pages/Users';
import Sidebar from './components/Sidebar'; 
import Login from './pages/Login';
import UserDetails from './pages/UserDetails';
import UserProfile from './pages/Users';  

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuth = () => {
    setIsLoggedIn(prevState => !prevState);
  };

  return (
    <Router>
      <div className="App">
        <Sidebar handleAuth={handleAuth} isLoggedIn={isLoggedIn} />

        <div className="content-wrapper">
          <main className="main-content">
            <Routes>
              {/* Home page */}
              <Route path="/" element={<Home />} />

              {/* Login Route */}
              <Route path="/login" element={<Login handleAuth={handleAuth} />} />

              {/* Protected routes */}
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute isAuthenticated={isLoggedIn}>
                    <Dashboard />
                  </ProtectedRoute>
                } 
              />

              {/* Dropdown routes inside dashboard */}
              <Route 
                path="/dashboard/overview" 
                element={
                  <ProtectedRoute isAuthenticated={isLoggedIn}>
                    <Overview />
                  </ProtectedRoute>
                } 
              />

              <Route 
                path="/dashboard/stats" 
                element={
                  <ProtectedRoute isAuthenticated={isLoggedIn}>
                    <Stats />
                  </ProtectedRoute>
                } 
              />

              {/* Other routes */}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

              {/* Users route with details and profile */}
              <Route 
                path="/user" 
                element={
                  <ProtectedRoute isAuthenticated={isLoggedIn}>
                    <Users />
                  </ProtectedRoute>
                } 
              />

              <Route 
                path="/user/details/:id" 
                element={
                  <ProtectedRoute isAuthenticated={isLoggedIn}>
                    <UserDetails />
                  </ProtectedRoute>
                } 
              />

              <Route 
                path="/user/profile/:id" 
                element={
                  <ProtectedRoute isAuthenticated={isLoggedIn}>
                    <UserProfile />
                  </ProtectedRoute>
                } 
              />

              {/* Page Not Found */}
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
