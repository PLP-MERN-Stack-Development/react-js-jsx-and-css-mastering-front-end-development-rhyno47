import React from 'react';

export default function Card({ title, children }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      {title && <h3 className="text-lg font-bold mb-3 text-[#680202]">{title}</h3>}
      {children}
    </div>
  );
}
