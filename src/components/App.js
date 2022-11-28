import '../styles/App.css';
import React from 'react';
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'
import FrameworksList from './FrameworksList';
import Sound from './Sound';


function App() {
  return (
    <><div className="App">
      <Router>
        <nav>
          <Link to="/plans" className="nav-item">plans</Link>
        </nav>
        <Routes>
          <Route path="/plans" element={<FrameworksList />}></Route>
        </Routes>
      </Router>
    </div>
    <Sound />
    </>
  );
}

export default App;
