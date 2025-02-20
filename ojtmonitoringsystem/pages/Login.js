// Login.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import { QRCodeCanvas } from 'qrcode.react';
import QRLogin from '../components/QRLogin'; // Make sure this path is correct
import './login.css'; // Your CSS file


export default function Login() {
  const [qrToken] = useState('demo_qr_code_123'); // Static QR Code for now
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!username || !password) {
      setError('Email or Phone Number is required.'); // More specific error message
      return;
    }

    // ***NO BACKEND - DEMO ONLY***
    if (username === 'testuser' && password === 'password') { // Replace with your test credentials
      setSuccess(true);
      localStorage.setItem('token', 'fake_token');
      // router.push('/dashboard'); // Uncomment and adjust when you have a dashboard route
    } else {
      setError('Invalid email or password.'); // More specific error message
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
      <button onClick={() => router.push('/')} className="go-back-button">
          Go Back
        </button>
        <div className="login-form">
          
          <h2>Welcome back!</h2>
          <p>We're so excited to see you again!</p>

          <form onSubmit={handleSubmit}>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            <input
              type="text"
              placeholder="Email or Phone Number" // More specific placeholder
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
            <Link href="OJTMonitoringDashboard" className="mt-4 bg-blue-500 text-white px-6 py-2 rounded">
            Go to Login
          </Link>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </form>

          <p className="register-link">Need an account? <a href="#">Register</a></p>
        </div>

        <div className="qr-code-section">
          <h3>Log in With QR Code</h3>
          <QRCodeCanvas value={qrToken} size={150} />
          <p>Scan this with the mobile app to log in instantly</p>

        </div>

      </div>
    </div>
  );
}