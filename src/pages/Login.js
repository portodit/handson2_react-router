import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import AccountNotification from '../components/AccountNotification';

const Login = ({ handleAuth }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Correct credentials
    const validUsername = 'adit@digistar.id';
    const validPassword = '123';

    // Check if username and password match the valid credentials
    if (username === validUsername && password === validPassword) {
      handleAuth(); // Toggle login state
      navigate('/'); // Redirect to Home page
    } else {
      setError('Anda harus login dengan menggunakan akun yang sudah disediakan.');
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-form-container">
        <h2 className="login-headline">Login Page</h2>
        <p className="login-description">
          Selamat Datang di Digistar CRM Dashboard 2024. Untuk mengakses semua fitur platform ini, silahkan login terlebih dahulu! 🚀
        </p>

        <div className="login-form">
          <input
            type="text"
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>

      <AccountNotification />
    </div>
  );
};

export default Login;
