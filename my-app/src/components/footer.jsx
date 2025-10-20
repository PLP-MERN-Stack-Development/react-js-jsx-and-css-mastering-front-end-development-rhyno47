import React from 'react';

export default function Footer() {
  return (
    <footer className="text-center p-4 bg-gray-100 text-gray-700 mt-4">
      &copy; {new Date().getFullYear()} Coding with Tawfiq — React Assignment
    </footer>
  );
}
