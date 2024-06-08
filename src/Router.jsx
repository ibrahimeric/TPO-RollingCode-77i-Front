import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Error404 from './components/Error404';

const AppRouter = () => {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </React.StrictMode>
  )
}

export default AppRouter;
