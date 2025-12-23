// src/App.jsx
import { useState } from 'react';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import DashboardPage from './components/pages/DashboardPage';

export default function App() {
  const [page, setPage] = useState('login');

  return (
    <>
      {page === 'login' && <LoginPage onNavigate={setPage} />}
      {page === 'register' && <RegisterPage onNavigate={setPage} />}
      {page === 'dashboard' && <DashboardPage />}
    </>
  );
}
