import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/auth" replace />}/>
        <Route path="/auth" element={<AuthPage/>}/>
        <Route path="/settings"/>
        <Route path="/calendar"/>
        <Route path="/tasks"/>
        <Route path="/dashboard"/>
        <Route path="/interests"/>
        <Route path="/goals"/>
        <Route path="/achievements"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
