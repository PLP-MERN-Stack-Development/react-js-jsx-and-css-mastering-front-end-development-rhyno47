import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Home from './home';
import TaskManagerPage from './TaskManagerPage';
import ApiPage from './pages/ApiPage';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskManagerPage />} />
          <Route path="/api" element={<ApiPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
