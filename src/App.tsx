import React from 'react';
import Navigation from './components/Navigation/Navigation'
import { AppProvider } from './services/context'
import {Routes, Route} from 'react-router-dom';
import Home from './views/Home'
import Leader from './views/Leader'
import Quiz from './views/Quiz'
import QuizAttempt from './views/QuizAttempt'
import Points from './views/Points'
import Profile from './views/Profile'
import ErrorPage from './views/ErrorPage'
import './App.css';

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/leaderboard" element={<Leader />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz/:id/:difficulty" element={<QuizAttempt />} />
          <Route path="/points/:id" element={<Points />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
      <Navigation />
    </AppProvider>
  );
}

export default App;
