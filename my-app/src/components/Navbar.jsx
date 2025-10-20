import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-[#680202] text-white">
      <Link to="/" className="font-bold text-xl">Coding with Tawfiq</Link>
      <div className="flex gap-4">
        <Link to="/tasks">Tasks</Link>
        <Link to="/api">API Demo</Link>
      </div>
    </nav>
  );
}
