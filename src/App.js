import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import LoginPage from './LoginPage/LoginPage';

function App() {
  return (
    <Router>
      <div className="App" style={{ overflow: "hidden", width: '100vw'}}>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
