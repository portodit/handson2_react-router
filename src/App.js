import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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
import UserDetails from './pages/UserDetails';
import Sidebar from './components/Sidebar'; 
import Login from './pages/Login'; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <Router>
      <div className="App">
        {/* Sidebar will only be shown when the user is logged in */}
        {isLoggedIn && <Sidebar handleAuth={handleAuth} />}

        <main className={isLoggedIn ? 'main-content' : ''}>
          <Routes>
            {/* Redirect to login if not logged in and accessing root */}
            <Route 
              path="/" 
              element={isLoggedIn ? <Home /> : <Navigate to="/login" />} 
            />

            {/* Login Route */}
            <Route path="/login" element={<Login handleAuth={handleAuth} />} />

            {/* Protected routes */}
            <Route 
              path="/dashboard/*" 
              element={
                <ProtectedRoute 
                  element={<Dashboard />} 
                  isAuthenticated={isLoggedIn}
                />
              }
            >
              <Route path="overview" element={<Overview />} />
              <Route path="stats" element={<Stats />} />
            </Route>

            {/* Other routes */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route 
              path="/user/*" 
              element={
                <ProtectedRoute 
                  element={<Users />} 
                  isAuthenticated={isLoggedIn} 
                />
              }
            />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
