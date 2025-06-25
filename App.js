import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Quiz from './components/Quiz';

function App() {
  const [user, setUser] = useState(null);
  const [quizActive, setQuizActive] = useState(false);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
    setQuizActive(false);
  };

  const startQuiz = () => {
    setQuizActive(true);
  };

  const backToDashboard = () => {
    setQuizActive(false);
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  if (quizActive) {
    return <Quiz onBack={backToDashboard} />;
  }

  return (
    <Dashboard username={user} onLogout={handleLogout} onStartQuiz={startQuiz} />
  );
}

export default App;
