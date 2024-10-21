import React from 'react';
import Header from './Header';
import ChannelRow from './ChannelRow';
import './App.css';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Fixed imports
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/search/:searchTerm"
            element={
              <div className="app__page">
                <Sidebar />
                <SearchPage />
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div className="app__page">
                <Sidebar />
                <RecommendedVideos />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
